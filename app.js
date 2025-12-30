import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ===== Firebase Config ===== */
const firebaseConfig = {
    apiKey: "AIzaSyAc9qvGac9B5EsHbB8Jgt7zxSvugUoYzVc",
    authDomain: "scorecard-hbtu.firebaseapp.com",
    projectId: "scorecard-hbtu",
};

window.app = initializeApp(firebaseConfig);
window.db = getFirestore(app);

/* ===== Constants ===== */
const SUBJECTS = ["ICS", "ICE", "IET", "EC"];
const MAX_TOTAL = 400;

/* ===== Load Firestore Collection ===== */
async function loadCollection(name) {
    const snap = await getDocs(collection(db, name));
    const data = {};
    snap.forEach(d => data[d.id] = d.data());
    return data;
}

/* ===== Load All Student Data & Calculate Aggregates ===== */
async function loadAllData() {
    const [ICS, ICE, IET, EC, students] = await Promise.all([
        loadCollection("ICS"),
        loadCollection("ICE"),
        loadCollection("IET"),
        loadCollection("EC"),
        loadCollection("students")
    ]);

    const rolls = new Set([
        ...Object.keys(ICS),
        ...Object.keys(ICE),
        ...Object.keys(IET),
        ...Object.keys(EC)
    ]);

    const data = [];

    rolls.forEach(roll => {
        let aggregate = 0;
        const subjects = {};

        SUBJECTS.forEach(sub => {
            const src = sub === "ICS" ? ICS :
                        sub === "ICE" ? ICE :
                        sub === "IET" ? IET : EC;

            const d = src[roll] || {};
            const m1 = d.m1 || 0;
            const m2 = d.m2 || 0;
            const end = d.end || 0;
            const ia = d.ia || 0;
            const total = m1 + m2 + end + ia;

            aggregate += total;
            subjects[sub] = { m1, m2, end, ia, total };
        });

        data.push({
            roll,
            name: students[roll]?.name || "NA",
            subjects,
            aggregate
        });
    });

    // Sort by aggregate and assign ranks
    data.sort((a, b) => b.aggregate - a.aggregate);
    data.forEach((s, i) => s.rank = i + 1);

    window.rankedData = data;
}

/* ===== Search Student ===== */
window.handleSearch = function () {
    const roll = document.getElementById("rollInput").value.trim();
    const s = window.rankedData.find(x => x.roll === roll);

    if (!s) {
        alert("Roll number not found");
        return;
    }

    window.currentStudent = s;
    document.getElementById("resultDisplay").style.display = "block";

    document.getElementById("studentName").innerText = s.name;
    document.getElementById("studentRoll").innerText = `Roll No: ${s.roll}`;
    document.getElementById("studentRank").innerText = s.rank;
    document.getElementById("totalMarks").innerText = s.aggregate;
    document.getElementById("maxMarks").innerText = ` / ${MAX_TOTAL}`;

    // Populate Subject-wise Performance
    const grid = document.getElementById("subjectGrid");
    grid.innerHTML = "";

    for (let sub in s.subjects) {
        const m = s.subjects[sub];
        grid.innerHTML += `
            <div class="subject-card">
                <div class="row"><span>Mid Sem 1</span><span>${m.m1}</span></div>
                <div class="row"><span>Mid Sem 2</span><span>${m.m2}</span></div>
                <div class="row"><span>End Sem</span><span>${m.end}</span></div>
                <div class="row"><span>Internal</span><span>${m.ia}</span></div>
                <div class="row total"><span>Total</span><span>${m.total} / 100</span></div>
            </div>
        `;
    }

    // Populate Higher Rank Students
    const list = document.getElementById("higherRankersList");
    list.innerHTML = "";
    window.rankedData
        .filter(x => x.rank < s.rank)
        .forEach(x => {
            list.innerHTML += `<div class="badge">#${x.name}</div>`;
        });
};

/* ===== Download PDF ===== */
window.downloadPDF = function () {
    const s = window.currentStudent;
    if (!s) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 20;

    // University Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("HARCOURT BUTLER TECHNICAL UNIVERSITY, KANPUR", 105, y, { align: "center" });

    y += 8;
    doc.setFontSize(12);
    doc.text("Academic Session 2025–26 | Information Technology (IT)", 105, y, { align: "center" });

    y += 6;
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 10;

    // Student Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Name: ${s.name}`, 20, y);
    doc.text(`Roll No: ${s.roll}`, 130, y);
    y += 7;
    doc.text(`Rank: ${s.rank}`, 20, y);
    doc.text(`Total Marks: ${s.aggregate} / ${MAX_TOTAL}`, 130, y);
    y += 10;

    // Table Header
    doc.setFont("helvetica", "bold");
    doc.text("Subject", 20, y);
    doc.text("M1", 65, y);
    doc.text("M2", 85, y);
    doc.text("End", 105, y);
    doc.text("IA", 130, y);
    doc.text("Total", 155, y);

    y += 4;
    doc.line(20, y, 190, y);
    y += 6;

    // Subject Rows
    doc.setFont("helvetica", "normal");
    for (let sub in s.subjects) {
        const m = s.subjects[sub];
        doc.text(sub, 20, y);
        doc.text(String(m.m1), 65, y);
        doc.text(String(m.m2), 85, y);
        doc.text(String(m.end), 105, y);
        doc.text(String(m.ia), 130, y);
        doc.text(String(m.total), 155, y);

        y += 7;
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    }

    // Footer
    y += 10;
    doc.setLineWidth(0.3);
    doc.line(20, y, 190, y);
    y += 7;
    doc.setFontSize(9);
    doc.text("This is a system-generated result card for academic reference only.", 105, y, { align: "center" });

    doc.save(`${s.roll}_HBTU_IT_2025-26_Result.pdf`);
};

/* ===== Initialize Data ===== */
loadAllData();
