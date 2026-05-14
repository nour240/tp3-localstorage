# 📚 TP3 — Exam Management System (LocalStorage)

> A lightweight client-side web application for managing exams, questions, and answers using HTML, CSS, and Vanilla JavaScript with localStorage persistence.

---

## 👥 Team Members

- Nour Hammadi  
- Douae Beghiel  
- Sara El Rebbate  

---

## 🚀 Project Overview

This project is a multi-page web application that allows users to manage exams entirely on the client side.

It uses the browser **localStorage API** to store data without any backend or database.

The system allows users to:
- Create exams
- Add questions and answers
- Display stored exams dynamically

---

## 🎯 Objectives

This project helps us learn:

- JavaScript objects manipulation  
- DOM manipulation  
- localStorage usage  
- Multi-page web application structure  
- Data organization (Exam → Questions → Answers)  

---

## ✨ Features

### 📝 1. Create Exam
Users can create an exam with:

- Exam name  
- Duration (minutes)  
- Description  
- Owner name  

All exams are saved in `localStorage` based on the owner.

---

### ❓ 2. Add Questions & Answers
Users can:

- Add questions to an existing exam  
- Add multiple answer options dynamically  
- Select the correct answer  
- Save structured data in localStorage  

---

### 📊 3. Display Exams
Users can:

- View all exams by owner  
- Display questions per exam  
- Show answers for each question  
- Load data from localStorage dynamically  

---

## 📂 Project Structure

TP3-Examens/
│
├── index.html              # Page principale
├── script.js               # Logique principale (examens + storage)
│
├── ajouter-question.html   # Page pour ajouter des questions
├── ajouter-question.js     # Logique d'ajout des questions
│
├── examens.html            # Page d'affichage des examens
└── README.md               # Documentation du projet