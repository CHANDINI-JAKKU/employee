# Employee Management System

A full-stack MERN application for managing employee records, featuring a React frontend and a Node.js/Express backend with MongoDB.

##  Features

- **Employee Management**: Full CRUD (Create, Read, Update, Delete) operations for employee records.
- **Modern UI**: Built with React 19 and Tailwind CSS 4 for a responsive and premium experience.
- **State Management**: Uses Zustand for efficient client-side state handling.
- **Form Validation**: Implemented using React Hook Form.
- **RESTful API**: Robust backend API with Express and Mongoose.
- **Database Integration**: MongoDB for persistent data storage.

##  Tech Stack

### Frontend
- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Zustand** (State Management)
- **React Router 7**
- **Axios** (API Calls)
- **React Hook Form**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **CORS**
- **BCrypt** & **JSON Web Token** (Ready for Auth)

---

##  Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or on Atlas)

---

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/CHANDINI-JAKKU/employee.git
cd employee
```

### 2. Backend Setup
```bash
cd employee-backend
npm install
```
Create a `.env` file (optional, if needed for custom ports/DB):
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/empdb
```
Start the backend:
```bash
node server.js
# Or if you have nodemon
nodemon server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

---

##  Project Structure

```text
employee/
├── employee-backend/     # Express Server
│   ├── API/              # API Routes
│   ├── models/           # Mongoose Schemas
│   └── server.js         # Entry Point
└── frontend/             # React Application
    ├── src/
    │   ├── components/   # UI Components
    │   ├── contexts/     # React Contexts
    │   ├── store/        # Zustand Store
    │   └── assets/       # Static Files
    └── vite.config.js    # Vite Config
```

---

##  API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/emp-api/employees` | Fetch all employees |
| POST | `/emp-api/employee` | Create a new employee |
| PUT | `/emp-api/employee/:id` | Update an employee |
| DELETE | `/emp-api/employee/:id` | Delete an employee |

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the ISC License.

---

**Developed with by [CHANDINI-JAKKU](https://github.com/CHANDINI-JAKKU)**
