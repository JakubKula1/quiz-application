# Sports Quiz Application

A sports trivia quiz application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Description

This application allows users to take a 10-question sports quiz, review their answers before submission, and view their results. It tracks how long each attempt takes, calculates a score, and stores results in a leaderboard table.

## Features

- Simple login screen (username and password; the password is not verified)
- 10 multiple-choice sports questions
- Answer review and modification before final submission
- Automatic scoring based on correct answers and time taken
- Result storage and retrieval from database
- Responsive user interface
- Redux state management for quiz flow

## Tech Stack

- **Frontend:** React 18, Redux Toolkit, React Router DOM, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/JakubKula1/quiz-application.git
   cd quiz-application
   ```

2. **Set up the server**
   ```bash
   cd server
   npm install
   ```
   - Create the server's `.env` file from the example:
     ```bash
     cp .env.example .env
     ```
     It sets `ATLAS_URI=mongodb://localhost:27017/quiz-database`. Change it if you use MongoDB Atlas.

3. **Set up the client**
   ```bash
   cd ../client
   npm install
   ```
   - Create the client's `.env` file from the example:
     ```bash
     cp .env.example .env
     ```
     It sets `REACT_APP_SERVER_HOSTNAME=http://localhost:8080`, the address of the server.

4. **Start MongoDB**
   - Ensure MongoDB is running locally, or update `ATLAS_URI` for cloud database

5. **Run the application**
   - Terminal 1 (Server):
     ```bash
     cd server
     npm start
     ```
   - Terminal 2 (Client):
     ```bash
     cd client
     npm start
     ```

6. **Load the quiz questions (first run only)**
   - With the server running, send one request to insert the questions into the database:
     ```bash
     curl -X POST http://localhost:8080/api/questions
     ```

7. **Access the app**
   - Open [http://localhost:3000](http://localhost:3000) in your browser (the API runs on port 8080)

## Usage

1. Enter your username and password on the main page
2. Click "Start Quiz" to begin
3. Answer the 10 sports questions
4. Use the "Prev" and "Next" buttons to navigate and review answers
5. Click "Next" on the last question to finish
6. View your results and score

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/questions` - Retrieve quiz questions
- `POST /api/questions` - Insert questions into database
- `DELETE /api/questions` - Delete all questions
- `GET /api/result` - Retrieve user results
- `POST /api/result` - Store quiz result
- `DELETE /api/result` - Delete all results
