## 🩺 Overview

**MediConnect** is a modern, full-stack real-time messaging platform for healthcare teams and professionals.  
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
