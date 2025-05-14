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
git clone https://github.com/nemanjagit/chatapp.git
cd chatapp
```

### 2. 🔒 Set Up Environment Variables
Create a `.env` file inside the `/backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=your_server_port
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Install Dependencies and Build the Frontend

```bash
npm run build # installs dependencies and builds frontend
```

Start the backend:

```bash
cd backend
npm run dev
```

Open new terminal from root and start the frontend:

```bash
cd frontend
npm run dev
```

🧠 Note: Ensure MongoDB is running (locally or via Atlas), and that you’ve configured Cloudinary credentials correctly before starting the app.

---

## 📁 Folder Structure

```
chat-app/
├── frontend/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/       # Zustand stores
│       └── ...
├── backend/              # Express backend
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
