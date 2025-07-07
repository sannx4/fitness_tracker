![image](https://github.com/user-attachments/assets/0626ce72-672b-4b3f-9cee-3cdb1636669d)# fitness_tracker

# Fitness Tracker:Mern Project 
https://lift-frontend-beryl.vercel.app/login

Lift is a modern, ML-integrated fitness and wellness tracker built with **MERN + ML Flask backend**.

- 🌿 **Track macros interactively** (with charts)
- 💧 Water intake tracker
- ⏲️ Focus timer
- 🌟 Daily motivation
- 📊 Body composition prediction using ML
- 🪄 Clean, scalable Tailwind UI
- 🛠️ JWT Authentication (secure login)
- 🚀 Deployed on Vercel (frontend) and Render (backend + ML model)

- <img width="1440" alt="Screenshot 2025-07-08 at 3 19 15 AM 1" src="https://github.com/user-attachments/assets/86fb5513-20cb-4736-b7e4-0224dc6fe9c4" />

<img width="1440" alt="Screenshot 2025-07-08 at 3 19 22 AM" src="https://github.com/user-attachments/assets/11c92885-09bb-44b0-9343-e239fa114a9a" />

<img width="1440" alt="Screenshot 2025-07-08 at 3 19 53 AM" src="https://github.com/user-attachments/assets/0c3038c5-3214-4f4e-aee4-e6a276f8dfc2" />

<img width="1440" alt="Screenshot 2025-07-08 at 3 19 59 AM" src="https://github.com/user-attachments/assets/117be915-4afc-4119-a9df-7557aa704b56" />





---


- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **ML Model Server:** Flask + Joblib
- **Deployment:** Vercel (frontend), Render (backend + ML)
- **Database:** MongoDB Atlas

---
1️⃣ Clone the repository

```bash
git clone https://github.com/sannx4/lift-frontend.git
git clone https://github.com/sannx4/lift-backend.git
git clone https://github.com/sannx4/lift-mlmodel.git

2️⃣ Setup Backend
bash
Copy
Edit
cd lift-backend
npm install
npm run dev
Ensure your .env has:


ini
Copy
Edit
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret
PORT=5000

3️⃣ Setup ML Model
bash
Copy
Edit
cd lift-mlmodel
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py

4️⃣ Setup Frontend
bash
Copy
Edit
cd lift-frontend
npm install
npm run dev
Visit http://localhost:3000 to view the app.

🌐 Live Deployment
Frontend: https://vercel.com/sanjays-projects-58339066/lift-frontend

Backend: https://lift-backend-bmpe.onrender.com

ML Model: https://lift-mlmodel.onrender.com

Credits
Made with ❤️ by Sanjay M
