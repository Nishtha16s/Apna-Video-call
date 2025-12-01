A simple real-time video call web application built using modern web tech — enabling two users to connect and video-chat seamlessly via browser.
Live Demo: https://apnavideocall-frontend-uiyf.onrender.com/

🚀 Table of Contents

Overview

Features

Tech Stack

Project Structure

Installation & Local Setup

Usage

Deployment / Live Demo

Limitations & Future Work

Contributing

Author & Contact

License

🌟 Overview

Apna-Video-call is a lightweight, real-time video calling app built using web technologies. It leverages WebRTC (or a similar mechanism) along with a signalling server to facilitate peer-to-peer video communication between users.

The aim is to provide a minimal, easy-to-deploy video chat solution — ideal for learning, demos, or integration into larger projects.

✅ Features

Real-time video call between two users

Browser-based — no installation needed beyond visiting the site

Clean UI (frontend) + Node.js/Express backend for signalling

Easily deployable (as done via Render)

🛠️ Tech Stack
Layer	Technology / Framework
Frontend	React (JavaScript), HTML, CSS
Backend	Node.js + Express
Real-time	WebSockets / WebRTC (Signalling via Socket/HTTP)
Deployment	Hosted on Render (Frontend + Backend)
📂 Project Structure
/
├─ backend/        # Express backend (signalling server, API routes)
├─ frontend/       # React frontend (UI & WebRTC logic)
├─ .gitignore
└─ README.md       # (this file)

🧑‍💻 Installation & Local Setup

If you want to run the project locally:

Clone the repository

git clone https://github.com/Nishtha16s/Apna-Video-call.git
cd Apna-Video-call


Install dependencies

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install


Run the application

# Start backend
cd ../backend
npm run start       # or `node server.js` / as per your script

# Start frontend
cd ../frontend
npm run start       # or `npm start`


Open the frontend in your browser (usually at http://localhost:3000) and start a video call.

🎬 Usage

Visit the frontend in the browser.

Enter or create a “room” (or unique identifier) to connect.

Share the room link with another user.

Once both join, video call should start — enjoy!


🌐 Deployment / Live Demo

This app is already deployed and live at:

https://apnavideocall-frontend-uiyf.onrender.com/

Feel free to use or share the link.

❗ Limitations & Future Work

Currently supports one-to-one video calls; no group call.

No user authentication — anyone with link can join room.

No persistent history or chat/messages (just video).

UI/UX can be improved: add waiting room, error handling, responsive design for mobile, etc.

Optionally: add audio-only mode, screen sharing, chat, or peer-to-peer file sharing.

🤝 Contributing

Contributions are welcome! If you want to add features (group video, chat, UI improvements), feel free to:

Fork the repo

Create a new branch (git checkout -b feature-xyz)

Make your changes

Open a Pull Request explaining your improvements

Also, if you find bugs — please report them in “Issues”.

👤 Author & Contact

Nishtha Roy 

GitHub: https://github.com/Nishtha16s

Email: nishtharoy1234@gmail.com
