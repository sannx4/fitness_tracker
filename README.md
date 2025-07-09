#fitness_tracker

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

drive link for pptx
https://docs.google.com/presentation/d/1tnLlaj2Isf4g2BNvnM_8CRfAUrv0uYu2/edit?usp=drivesdk&ouid=100752946336205145014&rtpof=true&sd=true

Drive link for the full project file:
https://drive.google.com/file/d/1A9YChmqRxq94gy4Ychw-lIvzM8gZPd-V/view?usp=drivesdk

drive link for the video:
https://drive.google.com/file/d/17JEH-pUELdwdRv7JhxsOM0Au1dBERchD/view?usp=drivesdk

🌐 Live Deployment
Frontend: https://vercel.com/sanjays-projects-58339066/lift-frontend

Backend: https://lift-backend-bmpe.onrender.com

ML Model: https://lift-mlmodel.onrender.com

git link for frontend:
https://github.com/sannx4/lift-frontend

git link for backend:
https://github.com/sannx4/lift-backend.git

git link for mlmodel:
https://github.com/sannx4/lift-mlmodel.git

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

done by
Sanjay M 22BIT0518
Namandip Raj 22BCE11371
Chirag Choudhary	22BCE10993
Snehil Kumar Amber 22BCE11225
