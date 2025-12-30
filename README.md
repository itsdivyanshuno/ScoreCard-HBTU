<div align="center">

# 🎓 ScoreCard – HBTU IT Branch (Semester 1)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://itsdivyanshuno.github.io/ScoreCard-HBTU/)  
[![License](https://img.shields.io/badge/License-Academic-lightgrey?style=for-the-badge)](#)  
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge)](#)

A modern, **web-based end-semester result portal** for  
**Harcourt Butler Technical University (HBTU)** – *Information Technology Branch*

</div>

---

## 📌 Overview

**ScoreCard** is an interactive result visualization platform where students can:  

- ✅ View **Semester 1 end-sem results**
- ✅ Check **overall and subject-wise ranking**
- ✅ See **top-performing students**
- ✅ Download **PDF results** for academic reference  

Developed during my **first end-semester at HBTU**, it focuses on **real-world data handling**, **clean UI**, and **accurate ranking logic**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 Search | Students can search by roll number |
| 🏆 Overall Rank | Accurate ranking with tie-safe logic |
| 📚 Subject-wise Rank | Highlight toppers in each subject |
| 📊 Total & Percentage | Full marks breakdown per subject |
| ⚠️ Missing Data Handling | Shows `NA` gracefully |
| 💾 Admin Panel | Edit student marks with Firebase authentication |
| 🌙 Dark Mode | Dark theme support for admin dashboard |
| 📄 PDF Download | Export student results as PDF |

---

## 🛠 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)  
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white)

---

## 📁 Project Structure

```text
ScoreCard-HBTU/
│
├── index.html        # Student portal UI
├── admin.html        # Admin dashboard for editing marks
├── style.css         # Shared styling
├── app.js            # Student-side JS: ranking & PDF generation
├── admin.js          # Admin JS: authentication & mark editing
├── data/             # Optional local JSON backup
│   ├── ICS.json
│   ├── ICE.json
│   ├── IET.json
│   └── EC.json
└── README.md         # Project documentation
🧠 Learning Outcomes
Handling real academic datasets

Designing tie-safe ranking algorithms

Writing modular and clean JavaScript

DOM manipulation & dynamic UI rendering

Deploying static projects using GitHub Pages

Integrating Firebase Firestore & authentication

Generating PDFs dynamically using jsPDF

🚀 Future Improvements
📈 Visual charts for performance analysis

🌙 Dark mode for student portal

📤 CSV/PDF upload for bulk mark updates

🔔 Notifications when results are updated

⚡ Optimizations for large datasets with pagination

🖼 Screenshots / Demo
<div align="center">

Student Portal – Search and view results


Admin Dashboard – Edit marks & dark mode

</div>
⚠️ Disclaimer
This project is strictly for academic and learning purposes.
All data belongs to the respective students and institution.

👤 Author
Divyansh Shukla
IT Branch, HBTU
First Semester Project

<div align="center"> ⭐ If you find this project useful, give it a star on GitHub! </div> ```