# 👥 Project Overview

This repository contains the complete source code for **Pager_X**, a real-time healthcare messaging platform built as a **team project**.

> **Note:**  
> The overall project is a collaborative effort. **My primary responsibility and contribution was the entire frontend development** (UI, UX, React integration, API calls, and responsive design).  
> The backend is included for completeness, but my role was mainly integration and collaboration with the backend team.

---

## 💡 My Contribution

- Designed and developed the **complete frontend** using React.js and Tailwind CSS  
- Built all core pages, components, chat UI, and authentication flows  
- Integrated frontend with backend APIs (login, messaging, notifications)  
- Ensured a mobile-responsive and user-friendly interface  
- Collaborated with backend developers for API integration and bug fixing  
- Gained practical knowledge of Node.js/Express backend (API usage, error handling, data flow)  
- **Containerized and deployed the project** using **Docker & DockerHub**, and hosted it on **Render** for global access  

---

## 🛠️ Tech Stack (Frontend)

- **React.js** (functional components, hooks)
- **Tailwind CSS**
- **Stream Chat API** (for real-time messaging)
- **Axios** (for API requests)
- **React Router DOM**
- **JWT** (frontend authentication handling)

---

## 🩺 Overview

**Pager_X** is a modern, full-stack real-time messaging platform for healthcare teams and professionals.  
It supports **secure instant group/direct messaging, file sharing, message editing, emojis, SMS alerts, and more**—optimized for both desktop and mobile users.

Ideal for clinics, hospitals, or distributed teams needing robust, scalable communication.

---

##  Features

- **Real-Time Messaging:** Secure chat for individuals & groups  
- **Modern UI/UX:** Responsive design, emoji support, dark/light mode  
- **Authentication:** JWT-based login and session management  
- **Advanced Chat:** Message editing/deletion, file sharing, SMS alerts (Twilio)  
- **Event-Driven:** Typing status, read/unread receipts, online indicators  
- **Scalable Architecture:** Modular client-server design  
- **Cross-Platform:** Works smoothly across 95%+ devices  

---

## 🛠️ Tech Stack (Full Project)

- **Frontend:** React.js, Tailwind CSS, Stream Chat API  
- **Backend:** Node.js, Express.js  
- **APIs:** Stream API (messaging), Twilio (SMS alerts)  
- **Auth:** JWT (JSON Web Tokens)  
- **Containerization & Deployment:** Docker, DockerHub, Render  
- **Others:** REST API, dotenv, CORS, Axios  


---

## 📁 Folder Structure
```

Pager_X/
│
├── client/ # Frontend (React)
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # Backend (Express)
│ ├── index.js
│ ├── controllers/
│ ├── routes/
│ ├── utils/
│ ├── .env.example
│ └── package.json
│
├── README.md
├── .gitignore

```

---

## ⚙️ Setup & Installation

## 1. **Clone the Repository**
```

git clone https://github.com/MRADULTRIPATHI/Real-Time-Chat-App.git
cd Real-Time-Chat-App/Pager_X
```
### 2. **Setup Environment Variables**
```
 -Go to the server folder and create .env file from the example:
 -cd server
 -cp .env.example .env   # Mac/Linux
 # OR
 -copy .env.example .env # Windows
## Add your Stream API, Twilio credentials, and JWT secret inside .env.
```
## 3. **Install Dependencies**
## Backend
```
-cd server
-npm install
-npm start
```
## Frontend
```
-cd client
-npm install
-npm start
```
## 4.  **Deployment (Docker + Render)**
```
-The app can be containerized into a single Docker image combining frontend + backend.

-Hosted publicly using DockerHub → mradul07/pager_x_chat_application

-Deployed on Render for global access.
```
---

## 📌 Summary

**Pager_X** is a full-stack real-time healthcare messaging platform built collaboratively as a team project.  
My **core responsibility** was developing the **frontend** (React.js + Tailwind CSS), while also gaining hands-on experience in backend integration and deployment.  

Through this project I demonstrated:
- Strong frontend skills (UI/UX, responsive design, API integration)
- Practical backend exposure (Node.js/Express, JWT auth, APIs)
- Real-time features using **Stream Chat API** and **Twilio**
- Deployment skills using **Docker, DockerHub, and Render**

👉 This project reflects my ability to **design, develop, integrate, and deploy** complete applications, making me well-prepared for full-stack or frontend-focused roles.  


