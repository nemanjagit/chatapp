# 💬 Real-Time Chat App

A modern real-time chat application built using the MERN stack with JWT authentication, live messaging using Socket.IO, and clean UI using TailwindCSS and DaisyUI.

---

## 🚀 Features

- 🔐 JWT Authentication (Login & Register)
- 💬 Real-time messaging via WebSockets (Socket.IO)
- 🟢 Online/offline user status
- 📱 Responsive design (Mobile & Desktop)
- 🎨 Modern UI with TailwindCSS & DaisyUI
- 🧠 Global state management with Zustand
- 🛡️ Protected routes
- ✅ Error handling & loading skeletons
- 👀 Unread message indicators **(custom)**
- ⚡ API call optimizations **(custom)**
- 📷 Image compression before upload **(custom)**
- 🧲 Online-only toggle for contact list **(custom)**

---

## 🌐 Live Demo

▶️ [Deployed on Render](https://chatapp-vy4a.onrender.com/)

---

## 📺 Credits

This project is based on an excellent fullstack tutorial by **Burak** from the YouTube channel **Codesistency**:

- 📹 [YouTube Tutorial](https://www.youtube.com/watch?v=ntKkVrQqBYY&t=16171s)
- 💻 [Original GitHub Repo](https://github.com/burakorkmez/fullstack-chat-app)

Big thanks to him for the detailed and well-explained series!

---

## 🛠️ Tech Stack

**Frontend:**
- React
- TailwindCSS
- DaisyUI
- Zustand
- Socket.IO client

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Socket.IO
- JSON Web Token (JWT)
- bcryptjs
- CORS

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

```bash
cd client
npm install
```

Start the frontend:

```bash
npm run dev
```

---

## 📁 Folder Structure

```
chat-app/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/       # Zustand stores
│       └── ...
├── server/              # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
```

---

## 🧪 Testing

- Manual testing for login, registration, and real-time messaging
- UI tested across various screen sizes
- Additional tests for online toggle and unread messages

---

## 🔒 Environment Variables

In `/server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---
