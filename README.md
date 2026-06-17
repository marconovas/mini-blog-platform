# Mini Blog Platform

A full stack blog platform built with React, Node.js, Express, Prisma and PostgreSQL.

---
## Demo

Frontend:
[https://tu-frontend.vercel.app](https://mini-blog-platform-tau.vercel.app/)

Backend API:
[https://mini-blog-api-j5kh.onrender.com](https://mini-blog-api-j5kh.onrender.com/)


# Features

- User authentication with JWT
- User roles (Admin/User)
- Create, edit and delete posts
- Protected routes
- REST API
- Form validation
- Prisma ORM integration
- Responsive frontend

---

# Tech Stack

## Frontend

- React
- React Router
- Fetch API
- CSS

## Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- express-validator

---

# Project Structure

```bash
mini-blog-platform/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── prisma/
│   └── app.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/mini-blog-platform.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_secret_key"
```

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Start the backend server:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

---

## Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get single post |
| POST | /api/posts | Create post |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

---

# Future Improvements

- Likes system
- Search functionality
- Pagination
- Image uploads
- Deployment

---

# Screenshots

_To be added..._
---

# Environment Variables

Backend `.env` example:

```env
DATABASE_URL=""
JWT_SECRET=""
PORT=3000
```

---

# Author

Developed by Marco Novas.

---

# License

This project is licensed under the MIT License.
