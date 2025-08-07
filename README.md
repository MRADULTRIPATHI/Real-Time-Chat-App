

## 👥 Project Overview

This repository contains the complete source code for **Pager_X**, a real-time healthcare messaging platform built as a **team project**.

> **Please Note:**  
> The overall project is a collaborative effort. **My primary responsibility and contribution was the entire frontend development** (UI, UX, React integration, API calls, and responsive design).  
> While the repository also includes backend code for completeness, I was not directly involved in backend implementation—though I gained exposure to backend concepts through integration work with the team.

---

## 💡 My Contribution

- Designed and developed the **complete frontend** using React.js and Tailwind CSS
- Built all core pages, components, chat UI, and authentication flows
- Integrated frontend with backend APIs for login, messaging, and notifications
- Ensured a mobile-responsive and user-friendly interface
- Collaborated closely with backend developers for smooth API integration and bug fixing
- Gained basic practical knowledge of Node.js/Express backend (API usage, error handling, data flow)

---

## 🛠️ Tech Stack (Frontend)

- **React.js** (functional components, hooks)
- **Tailwind CSS**
- **Stream Chat API** (for real-time messaging)
- **Axios** (for API requests)
- **React Router DOM**
- **JWT** (for authentication handling on frontend)

---
## 🩺 Overview

**Pager_X** is a modern, full-stack real-time messaging platform for healthcare teams and professionals.  
Built with **React.js** (frontend) and **Node.js/Express** (backend), it supports secure instant group/direct messaging, file sharing, message editing, emojis, SMS alerts, and more—optimized for both desktop and mobile users.

Ideal for clinics, hospitals, or any distributed team needing robust, scalable communication.

---

## 🚀 Features

- **Real-Time Messaging:** Secure chat for individuals & groups
- **Modern UI/UX:** Responsive interface, emoji support, dark/light mode, and mobile-friendly design
- **Authentication:** User login and session management (JWT)
- **Advanced Chat:** Message editing/deletion, custom chat commands, file sharing, SMS alert integration (Twilio)
- **Event-Driven:** Typing status, message read/unread, online indicators
- **Scalable Architecture:** Modular client-server design for easy extension
- **Accessible:** 95%+ device compatibility

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Stream Chat API
- **Backend:** Node.js, Express.js
- **APIs:** Stream API (messaging), Twilio (SMS alerts)
- **Auth:** JWT (JSON Web Tokens)
- **Others:** REST API, dotenv, CORS, Axios

---

## 📁 Folder Structure

Pager_X/
│
├── client/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/
│ ├── index.js
│ ├── controllers/
│ ├── routes/
│ ├── utils/
│ ├── .env.example
│ └── package.json
│
├── README.md
├── .gitignore


---

## ⚙️ Setup & Installation

### 1. **Clone the Repository**
```bash
git clone https://github.com/MRADULTRIPATHI/Real-Time-Chat-App.git
cd Real-Time-Chat-App
git clone https://github.com/MRADULTRIPATHI/Real-Time-Chat-App.git
Then move into the project directory:
cd Real-Time-Chat-App
**1. Move to the server directory:**
Go to the Pager_X folder
cd Pager_X
**2. Copy the example environment file and rename it to `.env`:**

copy .env.example .env     # Windows
# OR
cp .env.example .env       # Mac/Linux
### **3. Install Dependencies**

**For the Backend:**
```bash
cd server
npm install
npm start
**For the Frontend:**  
Open a **new terminal window/tab** and run:

```bash
cd client
npm install
npm start
