<div align="center">

# 🎓 ScoreCard – HBTU IT Branch
### *Semester 1 Result Analytics Portal*

  <img src="https://img.shields.io/badge/Live_Demo-blue?style=for-the-badge&logo=googlechrome&logoColor=white" height="35">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" height="35">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github" height="35">

---

### 🚀 [View Live Demo](https://itsdivyanshuno.github.io/ScoreCard-HBTU/) | 🐛 [Report Bug](https://github.com/itsdivyanshuno/ScoreCard-HBTU/issues) | 💡 [Request Feature](https://github.com/itsdivyanshuno/ScoreCard-HBTU/issues)

---

**A high-performance result management system for HBTU students.** *Eliminating manual rank calculation through automated, secure, and client-side processing.*

<img src="https://raw.githubusercontent.com/itsdivyanshuno/ScoreCard-HBTU/main/assets/preview.png" alt="Project Preview" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
*(Replace the URL above with a real screenshot of your app once uploaded to GitHub)*

</div>

## 📖 Overview
ScoreCard was engineered to solve the friction of traditional result viewing. Instead of scrolling through massive, static PDFs, students can instantly search, analyze their rank, and export professional performance reports. 

## ✨ Key Features
| Feature | Description |
| :--- | :--- |
| 🔍 **Instant Search** | Search by Roll Number with sub-second latency. |
| 🏆 **Smart Ranking** | Custom logic for tie-safe ranking and topper identification. |
| 📊 **Analytics** | Detailed subject-wise breakdown vs. Aggregate performance. |
| 📄 **PDF Engine** | One-click "Download Result" using client-side PDF generation. |
| 🔐 **Admin Suite** | Firebase Auth-protected panel to manage marks and dark mode. |

---

## 🛠 Tech Stack

<div align="center">

| Frontend | Database | Deployment |
| :---: | :---: | :---: |
| <img src="https://skillicons.dev/icons?i=html,css,js" height="45"> | <img src="https://skillicons.dev/icons?i=firebase" height="45"> | <img src="https://skillicons.dev/icons?i=github" height="45"> |

</div>

---

## ⚙️ How It Works
1. **Serverless Data:** Data is fetched from **Firestore** via optimized NoSQL queries.
2. **Logic Engine:** The `app.js` file processes scores, calculates the mean, and applies a sorting algorithm to determine ranks in real-time.
3. **PDF Generation:** Utilizes client-side libraries to convert the DOM result view into a clean A4 PDF layout.

---

## 📁 Project Structure
```text
ScoreCard-HBTU/
├── index.html        # Main Search & Student Portal
├── admin.html        # Secure Dashboard for data entry
├── app.js            # Ranking logic & Data fetching
├── admin.js          # Auth & Database Write operations
└── style.css         # Professional UI styling
🚀 Getting Started
Clone the Repo

Bash

git clone [https://github.com/itsdivyanshuno/ScoreCard-HBTU.git](https://github.com/itsdivyanshuno/ScoreCard-HBTU.git)
Firebase Setup

Create a project on Firebase Console.

Add your apiKey and projectId to app.js.

Launch

Open index.html with Live Server.

👤 Author
<div align="left"> <img src="https://www.google.com/search?q=https://github.com/itsdivyanshuno.png" width="100" style="border-radius: 50%; float: left; margin-right: 20px;">

Divyansh Shukla IT Branch, HBTU (Class of 2028) <a href="https://www.google.com/search?q=https://github.com/itsdivyanshuno"><img src="https://www.google.com/search?q=https://img.shields.io/badge/GitHub-100000%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26logoColor%3Dwhite"></a> <a href="INSERT_YOUR_LINKEDIN_URL_HERE"><img src="https://www.google.com/search?q=https://img.shields.io/badge/LinkedIn-0077B5%3Fstyle%3Dfor-the-badge%26logo%3Dlinkedin%26logoColor%3Dwhite"></a>

</div>

<br clear="both">

<div align="center"> ⭐ <b>If you find this project useful, please give it a star!</b> ⭐ </div>


### Key Improvements Made:

1.  **Icon Size:** Used `skillicons.dev` and `height="35"` or `45` to make the tech stack and badges look significantly larger and more modern.
2.  **Visual Break:** Added a horizontal line (`---`) and a placeholder for a **Large Preview Image**.
3.  **Author Section:** Added a circular profile picture (it pulls automatically from your GitHub) and large social media buttons.
4.  **Alignment:** Balanced the use of `center` for branding and `left` for technical details to ensure readability.

**Would you like me to help you generate a custom "Banner Image" for the top of this READM
