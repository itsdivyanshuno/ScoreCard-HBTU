import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const SUBJECTS = ["ICS", "ICE", "IET", "EC"];
let students = [];
let currentStudent = null;

/* ===== LOGIN ===== */
window.login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch {
        alert("Login failed");
    }
};

/* ===== AUTH STATE ===== */
onAuthStateChanged(auth, user => {
    if (user) {
        loginBox.style.display = "none";
        adminPanel.style.display = "block";
        loadAll();
    }
});

/* ===== LOAD ALL DATA ===== */
async function loadAll() {
    const subs = {};
    for (let s of SUBJECTS) subs[s] = await loadSub(s);
    const names = await loadNames();

    students = Object.keys(names).map(r => ({
        roll: r,
        name: names[r],
        ...Object.fromEntries(SUBJECTS.map(s => [s, subs[s][r] || {}]))
    }));

    render(students);
}

/* ===== LOAD SUBJECT ===== */
async function loadSub(sub) {
    const snap = await getDocs(collection(db, sub));
    const d = {};
    snap.forEach(x => d[x.id] = x.data());
    return d;
}

/* ===== LOAD STUDENT NAMES ===== */
async function loadNames() {
    const snap = await getDocs(collection(db, "students"));
    const d = {};
    snap.forEach(x => d[x.id] = x.data().name);
    return d;
}

/* ===== RENDER TABLE ===== */
function render(list) {
    tableBody.innerHTML = "";
    list.forEach(s => {
        tableBody.innerHTML += `
        <tr>
            <td>${s.roll}</td>
            <td>${s.name}</td>
            <td>
                <button class="edit-btn" onclick="openEdit('${s.roll}')">Edit</button>
            </td>
        </tr>`;
    });
}

/* ===== FILTER STUDENTS ===== */
window.filterStudents = () => {
    const q = searchInput.value.toLowerCase();
    render(students.filter(s =>
        s.roll.includes(q) || s.name.toLowerCase().includes(q)
    ));
};

/* ===== OPEN EDIT MODAL ===== */
window.openEdit = roll => {
    currentStudent = students.find(s => s.roll === roll);
    modalTitle.innerText = `${currentStudent.name} (${roll})`;
    modalBody.innerHTML = "";

    SUBJECTS.forEach(sub => {
        const m = currentStudent[sub];
        const total = (m.m1 || 0) + (m.m2 || 0) + (m.end || 0) + (m.ia || 0);

        modalBody.innerHTML += `
        <div class="subject">
            <h4>${sub} <span class="total" id="${sub}_total">Total: ${total}</span></h4>
            M1 <input oninput="updateTotal('${sub}')" id="${sub}_m1" value="${m.m1 || 0}">
            M2 <input oninput="updateTotal('${sub}')" id="${sub}_m2" value="${m.m2 || 0}">
            End <input oninput="updateTotal('${sub}')" id="${sub}_end" value="${m.end || 0}">
            IA <input oninput="updateTotal('${sub}')" id="${sub}_ia" value="${m.ia || 0}">
        </div>`;
    });

    editModal.style.display = "flex";
};

/* ===== UPDATE TOTAL ===== */
window.updateTotal = sub => {
    const total =
        (+document.getElementById(`${sub}_m1`).value || 0) +
        (+document.getElementById(`${sub}_m2`).value || 0) +
        (+document.getElementById(`${sub}_end`).value || 0) +
        (+document.getElementById(`${sub}_ia`).value || 0);

    document.getElementById(`${sub}_total`).innerText = `Total: ${total}`;
};

/* ===== SAVE MARKS ===== */
window.saveMarks = async () => {
    for (let sub of SUBJECTS) {
        await updateDoc(doc(db, sub, currentStudent.roll), {
            m1: +document.getElementById(`${sub}_m1`).value || 0,
            m2: +document.getElementById(`${sub}_m2`).value || 0,
            end: +document.getElementById(`${sub}_end`).value || 0,
            ia: +document.getElementById(`${sub}_ia`).value || 0
        });
    }
    alert("Saved successfully");
    closeModal();
};

/* ===== CLOSE MODAL ===== */
window.closeModal = () => {
    editModal.style.display = "none";
};
