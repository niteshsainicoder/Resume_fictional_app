# Fictional Resume Analysis App

## 🚀 Overview
This is a mini backend project for a fictional resume analysis application. It provides APIs for:
- **Authentication** (JWT-based, with hardcoded credentials)
- **Resume Data Enrichment** (Extracts and structures data from PDF resumes using AI)
- **Resume Search** (Queries stored resumes based on username)

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Cloud)
- **AI Integration**: Google Gemini API
- **Security**: JWT Authentication, Data Encryption

## 📌 Features
- **Extract raw text from PDF resumes**
- **Use AI to parse and structure resume data**
- **Store structured data in MongoDB**
- **Search for resumes by name**
- **Encrypt/decrypt sensitive data (name, email)**
- **JWT Authentication for secure access**

## 📂 Project Structure
```
fictional_resume_app/
│── src/
│   ├── controllers/       # API route handlers
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express API routes
│   ├── utils/             # Utility functions
│   ├── middlewares/       # Authentication & security middleware
│── .env                   # Environment variables
│── index.js               # Main server file
│── package.json           # Dependencies & scripts
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_ACCESS_TOKEN=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

## 🚀 Installation & Setup
```sh
# Clone the repository
git clone https://github.com/niteshsainicoder/Resume_fictional_app.git
cd Resume_fictional_app

# Install dependencies
npm install

# Start the server
npm run test
```

## 🔥 API Endpoints

### 1️⃣ **Authentication**
**Login:**
```http
POST /api/auth
```
**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```
**Response:**
 token will be set as cookie so you will not get it in resopnse
```json
{
  "token": "your_jwt_token"
}
```

### 2️⃣ **Resume Enrichment**
**Extract & Process Resume Data:**
```http
POST /api/enrich
```
**Request Body:**
```json
{
  "url": "https://example.com/resume.pdf"
}
```
**Response:**
```json
{
  "message": "Resume analyzed and saved into DB"
}
```

### 3️⃣ **Resume Search**
**Find Resume by Username:**
```http
POST /api/search
```
**Request Body:**
```json
{
  "name": ""
}
```
**Response:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "skills": ["JavaScript", "React", "Node.js"],
  "...": "..."
}
```


## 🛠️ Troubleshooting
- **PDF parsing error?** Check if the URL is accessible.
- **MongoDB connection error?** Verify your `MONGO_URI`.
- **Authentication failed?** Ensure correct username/password.

## 📜 License
This project is for educational purposes only.


