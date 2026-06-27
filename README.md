# Problem Hunter AI

Problem Hunter AI is an AI-powered platform that helps communities report, analyze, and prioritize local problems while generating actionable solutions and implementation roadmaps.

## Features

* Report local community problems
* Categorize and prioritize issues
* Dark/Light mode support
* Responsive design
* REST API backend
* Search, update and delete problems

## Backend API Endpoints

### Get All Problemssss

GET /api/problems

### Get Single Problem

GET /api/problems/:id

### Create Problem

POST /api/problems

### Update Problem

PUT /api/problems/:id

### Delete Problem

DELETE /api/problems/:id

### Search Problems

GET /api/problems/search/:keyword

## How to Run Backend Locally

### 1. Navigate to Backend Folder

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file:

```env
PORT=5000
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Server URL

```text
http://localhost:5000
```

## Technologies Used

* React
* Vite
* Node.js
* Express.js
* Thunder Client
* JavaScript
* CSS

## Author

Utkarsh Kumar Dubey
