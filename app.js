/*************************
 * CONFIG
 *************************/
const SUBJECTS = {
    ICS: { max: 80 },
    ICE: { max: 80 }
};

/*************************
 * ICS MARKS
 *************************/
const ICS = {
    "230108017": { name: "ARNAV RISHIT", m1: 8, m2: 3, end: 20 },
    "250108001": { name: "ABHISHEK TIWARI", m1: 15, m2: 11, end: 41 },
    "250108002": { name: "ADITI AWASTHI", m1: 14, m2: 7, end: 44 },
    "250108003": { name: "ADITYA GAUTAM", m1: 14, m2: 12, end: 40 },
    "250108004": { name: "ADITYA LODHI", m1: 12, m2: 7, end: 33 },
    "250108005": { name: "ANKUSH", m1: 13, m2: 6, end: 35 },
    "250108006": { name: "ANURAG KUMAR", m1: 14, m2: 10, end: 40 },
    "250108007": { name: "APARNA CHAURASIA", m1: 9, m2: 4, end: 27 },
    "250108008": { name: "ARYAN BHUSHAN", m1: 13, m2: 6, end: 31 },
    "250108009": { name: "ARYAN NIGAM", m1: 7, m2: 3, end: 29 },
    "250108010": { name: "ARYAN SINGH", m1: 11, m2: 8, end: 33 },
    "250108011": { name: "ARYAN TIWARI", m1: 12, m2: 9, end: 46 },
    "250108012": { name: "ASHANK SINGH", m1: 12, m2: 7, end: 35 },
    "250108013": { name: "ATHARVA AVICHAL", m1: 11, m2: 5, end: 28 },
    "250108014": { name: "ATISHAY JAIN", m1: 12, m2: 9, end: 29 },
    "250108015": { name: "AYUSH SHAKYA", m1: 6, m2: 5, end: 21 },
    "250108016": { name: "AYUSH SINGH", m1: 11, m2: 8, end: 30 },
    "250108017": { name: "BURHAN FAROOQ", m1: 5, m2: 6, end: 35 },
    "250108018": { name: "DAKSH THAKAR", m1: 10, m2: 4, end: 25 },
    "250108019": { name: "DEV PRATAP", m1: 15, m2: 9, end: 36 },
    "250108020": { name: "DHRUV GUPTA", m1: 12, m2: 3, end: 34 },
    "250108021": { name: "DIVYANSH SHUKLA", m1: 13, m2: 11, end: 44 },
    "250108022": { name: "GOVIND MOHAN AWASTHI", m1: 11, m2: 6, end: 35 },
    "250108025": { name: "ISHAAN VERMA", m1: 12, m2: 11, end: 36 },
    "250108026": { name: "ISHIKA JAISWAL", m1: 12, m2: 10, end: 40 },
    "250108027": { name: "ISHITA", m1: 11, m2: 7, end: 31 },
    "250108028": { name: "KARAN KUMAR", m1: 7, m2: 4, end: 29 },
    "250108029": { name: "KARTIKEY MAURYA", m1: 12, m2: 2, end: 20 },
    "250108030": { name: "KESHAV YADAV", m1: 13, m2: 6, end: 33 },
    "250108031": { name: "KRITIKA ARORA", m1: 13, m2: 11, end: 31 },
    "250108032": { name: "LAKSHYA AGARWAL", m1: 12, m2: 8, end: 33 },
    "250108033": { name: "MAANYA KHANNA", m1: 12, m2: 13, end: 44 },
    "250108035": { name: "MANISH KASHYAP", m1: 13, m2: 10, end: 32 },
    "250108036": { name: "MANISH KUMAR", m1: 8, m2: 4, end: 20 },
    "250108037": { name: "MILAN CHADGAL", m1: 13, m2: 6, end: 38 },
    "250108038": { name: "NAINA KANNAUJIA", m1: 7, m2: 6, end: 30 },
    "250108039": { name: "NAMAN SAXENA", m1: 13, m2: 10, end: 40 },
    "250108040": { name: "NEHAL TRIPATHI", m1: 12, m2: 7, end: 39 },
    "250108041": { name: "PANKAJ KUMAR", m1: 10, m2: 6, end: 39 },
    "250108042": { name: "PIYUSH YADAV", m1: 12, m2: 6, end: 31 },
    "250108043": { name: "PRAGYA SINGH", m1: 11, m2: 4, end: 33 },
    "250108045": { name: "PRANJAL TRIPATHI", m1: 12, m2: 4, end: 32 },
    "250108046": { name: "PRASHANT", m1: 11, m2: 3, end: 24 },
    "250108047": { name: "PRASHANT KUMAR", m1: 6, m2: 3, end: 22 },
    "250108048": { name: "PREM SHAH", m1: 14, m2: 10, end: 46 },
    "250108049": { name: "PRINCE RANJAN", m1: 12, m2: 4, end: 31 },
    "250108050": { name: "PRIYANSHU CHAUDHARY", m1: 12, m2: 8, end: 37 },
    "250108051": { name: "PRIYANSHU CHAURASIA", m1: 11, m2: 9, end: 37 },
    "250108052": { name: "PURUSOTTAM RAI", m1: 7, m2: 4, end: 25 },
    "250108053": { name: "RAKSHIT PANDEY", m1: 13, m2: 6, end: 34 },
    "250108054": { name: "RISHIRAJ NIRMAL", m1: 10, m2: 5, end: 26 },
    "250108055": { name: "RISHIT JAIN", m1: 9, m2: 7, end: 36 },
    "250108056": { name: "ROHIT MAURYA", m1: 14, m2: 7, end: 36 },
    "250108057": { name: "SAMARTH BAJPAI", m1: 6, m2: 4, end: 20 },
    "250108059": { name: "SARTHAK PANDEY", m1: 11, m2: 8, end: 36 },
    "250108060": { name: "SATYAM GUPTA", m1: 11, m2: 11, end: 36 },
    "250108061": { name: "SHAMLI BHARGAV", m1: 9, m2: 7, end: 29 },
    "250108062": { name: "SHIVAM KUMAR VERMA", m1: 12, m2: 5, end: 30 },
    "250108063": { name: "SHIVANSH BAJPAI", m1: 12, m2: 9, end: 34 },
    "250108064": { name: "SHREYA GUPTA", m1: 14, m2: 5, end: 33 },
    "250108065": { name: "SHRUTI SINGH", m1: 14, m2: 8, end: 42 },
    "250108066": { name: "SIDDHANT THAWRANI", m1: 12, m2: 13, end: 36 },
    "250108067": { name: "SMIKSHA SHARMA", m1: 13, m2: 6, end: 36 },
    "250108068": { name: "SMRITA VAISHYA", m1: 10, m2: 9, end: 34 },
    "250108069": { name: "SUHANI GUPTA", m1: 8, m2: 8, end: 30 },
    "250108070": { name: "TANISH SRIVASTAVA", m1: 11, m2: 10, end: 36 },
    "250108071": { name: "TANMAY DWIVEDI", m1: 12, m2: 7, end: 33 },
    "250108073": { name: "UTKARSH KUMAR MADDHESHIYA", m1: 10, m2: 6, end: 34 },
    "250108074": { name: "UTKARSH MISHRA", m1: 12, m2: 7, end: 38 },
    "250108075": { name: "UTKARSH RAJ", m1: 13, m2: 6, end: 32 },
    "250108076": { name: "VAIBHAV KUMAR", m1: 10, m2: 4, end: 29 },
    "250108077": { name: "VAIBHAV SINGH", m1: 11, m2: 5, end: 28 },
    "250108078": { name: "VAIBHAVI VERMA", m1: 14, m2: 9, end: 33 },
    "250108079": { name: "VANSH GUPTA", m1: 14, m2: 6, end: 29 },
    "250108080": { name: "VARDHAN SINGH VAADVAAN", m1: 10, m2: 8, end: 26 },
    "250108081": { name: "VASU RATHOUR", m1: 14, m2: 13, end: 34 },
    "250108082": { name: "VEDIKA YADAV", m1: 14, m2: 6, end: 35 }
};

/*************************
 * ICE MARKS
 *************************/
const ICE = {
    "230108017": { m1: 5, m2: 8, end: 10 },
    "250108001": { m1: 13, m2: 12, end: 42 },
    "250108002": { m1: 14, m2: 13, end: 43 },
    "250108003": { m1: 11, m2: 15, end: 41 },
    "250108004": { m1: 6, m2: 6, end: 21 },
    "250108005": { m1: 10, m2: 10, end: 43 },
    "250108006": { m1: 10, m2: 11, end: 36 },
    "250108007": { m1: 6, m2: 8, end: 26 },
    "250108008": { m1: 10, m2: 9, end: 37 },
    "250108009": { m1: 6, m2: 7, end: 23 },
    "250108010": { m1: 9, m2: 10, end: 32 },
    "250108011": { m1: 8, m2: 10, end: 24 },
    "250108012": { m1: 6, m2: 11, end: 37 },
    "250108013": { m1: 8, m2: 6, end: 18 },
    "250108014": { m1: 10, m2: 10, end: 30 },
    "250108015": { m1: 5, m2: 9, end: 16 },
    "250108016": { m1: 6, m2: 8, end: 18 },
    "250108017": { m1: 3, m2: 7, end: 22 },
    "250108018": { m1: 8, m2: 9, end: 28 },
    "250108019": { m1: 8, m2: 11, end: 32 },
    "250108020": { m1: 9, m2: 12, end: 37 },
    "250108021": { m1: 9, m2: 9, end: 38 },
    "250108022": { m1: 9, m2: 8, end: 25 },
    "250108025": { m1: 12, m2: 9, end: 26 },
    "250108026": { m1: 13, m2: 12, end: 36 },
    "250108027": { m1: 6, m2: 9, end: 30 },
    "250108028": { m1: 6, m2: 8, end: 24 },
    "250108029": { m1: 8, m2: 9, end: 23 },
    "250108030": { m1: 9, m2: 10, end: 28 },
    "250108031": { m1: 7, m2: 12, end: 32 },
    "250108032": { m1: 12, m2: 10, end: 29 },
    "250108033": { m1: 11, m2: 14, end: 38 },
    "250108035": { m1: 12, m2: 12, end: 35 },
    "250108036": { m1: 10, m2: 7, end: 19 },
    "250108037": { m1: 10, m2: 7, end: 28 },
    "250108038": { m1: 5, m2: 7, end: 22 },
    "250108039": { m1: 13, m2: 14, end: 37 },
    "250108040": { m1: 7, m2: 11, end: 24 },
    "250108041": { m1: 6, m2: 9, end: 30 },
    "250108042": { m1: 8, m2: 10, end: 30 },
    "250108043": { m1: 8, m2: 10, end: 23 },
    "250108045": { m1: 7, m2: 9, end: 26 },
    "250108046": { m1: 10, m2: 9, end: 23 },
    "250108047": { m1: 5, m2: 8, end: 17 },
    "250108048": { m1: 8, m2: 11, end: 38 },
    "250108049": { m1: 9, m2: 7, end: 24 },
    "250108050": { m1: 10, m2: 9, end: 26 },
    "250108051": { m1: 8, m2: 8, end: 25 },
    "250108052": { m1: 4, m2: 9, end: 23 },
    "250108053": { m1: 8, m2: 8, end: 20 },
    "250108054": { m1: 6, m2: 7, end: 21 },
    "250108055": { m1: 7, m2: 9, end: 28 },
    "250108056": { m1: 8, m2: 10, end: 29 },
    "250108057": { m1: 2, m2: 6, end: 15 },
    "250108059": { m1: 12, m2: 11, end: 37 },
    "250108060": { m1: 11, m2: 12, end: 27 },
    "250108061": { m1: 8, m2: 8, end: 23 },
    "250108062": { m1: 10, m2: 7, end: 29 },
    "250108063": { m1: 7, m2: 9, end: 23 },
    "250108064": { m1: 9, m2: 8, end: 21 },
    "250108065": { m1: 11, m2: 10, end: 45 },
    "250108066": { m1: 11, m2: 14, end: 42 },
    "250108067": { m1: 9, m2: 10, end: 26 },
    "250108068": { m1: 8, m2: 7, end: 20 },
    "250108069": { m1: 6, m2: 9, end: 20 },
    "250108070": { m1: 11, m2: 13, end: 35 },
    "250108071": { m1: 7, m2: 9, end: 28 },
    "250108073": { m1: 8, m2: 8, end: 22 },
    "250108074": { m1: 11, m2: 7, end: 29 },
    "250108075": { m1: 5, m2: 7, end: 28 },
    "250108076": { m1: 5, m2: 8, end: 16 },
    "250108077": { m1: 10, m2: 8, end: 24 },
    "250108078": { m1: 12, m2: 10, end: 22 },
    "250108079": { m1: 8, m2: 8, end: 28 },
    "250108080": { m1: 9, m2: 8, end: 20 },
    "250108081": { m1: 10, m2: 9, end: 37 },
    "250108082": { m1: 9, m2: 10, end: 29 }
};

/*************************
 * MERGE + RANK LOGIC
 *************************/
const rolls = new Set([...Object.keys(ICS), ...Object.keys(ICE)]);

const processedData = [...rolls].map(roll => {
    const ics = ICS[roll];
    const ice = ICE[roll];

    const make = s =>
        s ? { ...s, total: s.m1 + s.m2 + s.end }
            : { m1: "NA", m2: "NA", end: "NA", total: 0 };

    const subjects = {
        ICS: make(ics),
        ICE: make(ice)
    };

    const aggregate = subjects.ICS.total + subjects.ICE.total;

    return {
        roll,
        name: ics?.name || "NA",
        subjects,
        aggregate
    };
});

const rankedData = processedData
    .sort((a, b) => b.aggregate - a.aggregate)
    .map(s => ({
        ...s,
        rank: processedData.filter(x => x.aggregate > s.aggregate).length + 1
    }));

/*************************
 * SUBJECT RANK
 *************************/
function getSubjectStats(roll, subject) {
    const list = rankedData
        .map(s => ({ roll: s.roll, total: s.subjects[subject].total }))
        .sort((a, b) => b.total - a.total);

    const me = list.find(s => s.roll === roll);
    const rank = list.filter(s => s.total > me.total).length + 1;

    return { rank, isTopper: rank === 1 };
}

/*************************
 * SEARCH & DISPLAY
 *************************/
function handleSearch() {
    const roll = document.getElementById("rollInput").value.trim();
    const s = rankedData.find(x => x.roll === roll);
    if (!s) return alert("Roll not found");
    displayResults(s);
}

function displayResults(s) {
    document.getElementById("resultDisplay").style.display = "block";
    document.getElementById("studentName").innerText = s.name;
    document.getElementById("studentRoll").innerText = `Roll No: ${s.roll}`;
    document.getElementById("studentRank").innerText = s.rank === 1 ? "1 🏆" : s.rank;
    document.getElementById("totalMarks").innerText = s.aggregate;
    document.getElementById("maxMarks").innerText = " / 160";

    const grid = document.getElementById("subjectGrid");
    grid.innerHTML = "";

    for (let sub in s.subjects) {
        const m = s.subjects[sub];
        const stats = getSubjectStats(s.roll, sub);

        grid.innerHTML += `
        <div class="subject-card">
            <div class="subject-header">
                <h4>${sub}</h4>
                <div class="badge-group">
                    ${stats.isTopper ? `<span class="topper-badge">🏆 TOPPER</span>` : ""}
                    <span class="sub-rank">Rank #${stats.rank}</span>
                </div>
            </div>
            <div class="row"><span>Mid Sem 1</span><span>${m.m1}</span></div>
            <div class="row"><span>Mid Sem 2</span><span>${m.m2}</span></div>
            <div class="row"><span>End Sem</span><span>${m.end}</span></div>
            <div class="row total"><span>Total</span><span>${m.total} / 80</span></div>
        </div>`;
    }

    const higherList = document.getElementById("higherRankersList");
    const higher = rankedData.filter(x => x.rank < s.rank);

    higherList.innerHTML = higher.length
        ? higher.map(st => `<span class="badge">${st.name}</span>`).join("")
        : `<span class="badge" style="border-color:var(--accent);color:var(--accent)">
            You are Rank 1 🎉
          </span>`;
}
