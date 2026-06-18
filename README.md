# Mini Blog Platform

A full stack blog platform built with React, Node.js, Express, Prisma and PostgreSQL.

---
## Demo

Frontend:
[https://mini-blog-platform.vercel.app](https://mini-blog-platform-tau.vercel.app/)

Backend API:
[https://mini-blog-api.onrender.com](https://mini-blog-api-j5kh.onrender.com/)


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

---

# Screenshots

<img width="1861" height="914" alt="Captura de pantalla 2026-06-18 005616" src="https://github.com/user-attachments/assets/9ed4f27b-fbb6-4045-9e54-da06126b2002" />
<img width="1560" height="911" alt="Captura de pantalla 2026-06-18 005839" src="https://github.com/user-attachments/assets/fc99a9d1-d259-410c-a1fd-cdcfa32f6ba7" />
<img width="1867" height="911" alt="Captura de pantalla 2026-06-18 005738" src="https://github.com/user-attachments/assets/946bc1b1-b423-4e35-bd30-06d4f833df90" />
<img width="1857" height="910" alt="Captura de pantalla 2026-06-18 005652" src="https://github.com/user-attachments/assets/27fc3196-22f3-4bc9-838b-be772566e323" />


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
