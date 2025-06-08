# ShopEasy Management

This repository contains a simple MERN stack management system built on top of the original ShopEasy Next.js demo. The frontend is implemented with **Next.js** and **React**, while the backend uses **Express** and **MongoDB** via **Mongoose**.

## Frontend

The frontend lives in the root of the project and can be started as usual:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Visit `http://localhost:3000/tasks` to see a very basic task management page that communicates with the backend server.

## Backend

The backend is located in the `backend/` directory.

1. Install dependencies (requires access to npm registry):

```bash
cd backend
npm install
```

2. Copy `.env.example` to `.env` and adjust the MongoDB connection string if necessary.

3. Start the server:

```bash
npm start
```

The server listens on `http://localhost:5000` by default and exposes REST endpoints under `/api/tasks`.

## Project Structure

```
/              - Next.js frontend
/backend       - Express/Mongoose backend
```

This setup provides a minimal example of a MERN stack application with database connectivity.
