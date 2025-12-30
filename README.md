<div align="center">

# 🎓 ScoreCard – HBTU IT Branch (Semester 1)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://itsdivyanshuno.github.io/ScoreCard-HBTU/)  
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge)](#)  
[![License](https://img.shields.io/badge/License-Academic-lightgrey?style=for-the-badge)](#)  

A **modern, interactive web portal** for viewing Semester 1 results of HBTU IT students.  
Experience **fast, client-side result processing**, detailed subject analysis, ranking, and PDF export.

</div>

---

## 📌 Why This Project?

ScoreCard was developed after my **first end-semester at HBTU** to solve common issues:  

- Students often struggle to **track their performance** across subjects.  
- Manual rank calculation is error-prone and time-consuming.  
- Admins need a **simple interface** to update marks securely.  

**ScoreCard** addresses these by combining **clean UI**, **accurate ranking**, and **PDF export**, fully hosted on **GitHub Pages** using **Firebase Firestore**.

---

## 💡 How It Works

1. **Data Source:** Marks are stored in Firebase Firestore collections for each subject.  
2. **Client-Side Processing:** JS fetches all student data, calculates total marks, and ranks students.  
3. **Search & Display:** Students search by roll number to view **subject-wise performance**, **aggregate**, and **rank**.  
4. **PDF Export:** Results can be downloaded as a **professional PDF**.  
5. **Admin Panel:** Secure login using Firebase Auth, edit marks, and toggle dark mode.  

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🔍 **Search by Roll Number** | Quickly find results for any student |
| 🏆 **Overall & Subject Ranking** | Tie-safe ranking and topper highlights |
| 📊 **Total & Percentage** | Clear marks breakdown for each subject |
| ⚠️ **Missing Data Handling** | Displays `NA` if a mark is missing |
| 💾 **Admin Dashboard** | Firebase-secured interface to edit marks |
| 🌙 **Dark Mode** | Admin can switch to dark theme for comfort |
| 📄 **PDF Export** | Download result card for offline use |
| ⚡ **Fast Processing** | Entirely client-side with zero backend delays |

---

## 🛠 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)  
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white)

</div>

---

## 📁 Project Structure

```text
ScoreCard-HBTU/
│
├── index.html        # Student portal UI with search & result display
├── admin.html        # Admin dashboard for editing marks & dark mode
├── style.css         # Shared styling for student and admin UI
├── app.js            # Student-side JS: ranking, PDF generation
├── admin.js          # Admin JS: authentication & mark updates
├── data/             # Optional local JSON backup (for offline testing)
│   ├── ICS.json
│   ├── ICE.json
│   ├── IET.json
│   └── EC.json
└── README.md         # Project documentation
🧠 Learning Outcomes
✅ Handling real academic datasets

✅ Designing tie-safe ranking algorithms

✅ Writing modular, maintainable JS

✅ Dynamic DOM manipulation & UI rendering

✅ Deploying static websites with GitHub Pages

✅ Integrating Firebase Firestore & Auth

✅ Generating dynamic PDFs from client-side JS

🚀 Future Improvements
📈 Add interactive charts for performance analysis

🌙 Dark mode for student portal

📤 Bulk CSV/PDF uploads for marks

🔔 Notifications when results are updated

⚡ Optimize large dataset performance

✨ Enhance UI animations & interactivity

⚠️ Disclaimer
This project is strictly for educational purposes.
All data belongs to the respective students and institution.

👤 Author
Divyansh Shukla
IT Branch, HBTU
First Semester Project

<div align="center"> ⭐ If you like this project, give it a star on GitHub! </div> ```
