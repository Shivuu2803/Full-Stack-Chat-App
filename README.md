# Full-Stack Chat Application

This is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to communicate in real time with features such as authentication, chat rooms, and a responsive design.

## Features

- **Real-Time Messaging**: Send and receive messages instantly using WebSockets.
- **User Authentication**: Secure sign-up and login using JWT (JSON Web Token).
- **Private Chats**: One-on-one messaging with other users.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Simple and intuitive UI built with React.

## Tech Stack

- **Frontend**: React.js, CSS, daisyui
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

### Steps to Run the Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shivuu2803/Full-Stack-Chat-App.git
   cd Full-Stack-Chat-App
   ```

2. **Install Dependencies**

   Install server and client dependencies:

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the `backend` directory with the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Application**

   Open two terminal windows:

   - Start the backend server:

     ```bash
     cd backend
     npm run dev
     ```

   - Start the frontend development server:

     ```bash
     cd frontend
     npm run dev
     ```

## Folder Structure

```
Full-Stack-Chat-App/
|├── backend/       # Backend code (Node.js, Express)
|   |├── models/    # Mongoose models
|   |├── routes/    # API routes
|   └── server.js  # Entry point for backend
|├── frontend/      # Frontend code (React)
|   |├── src/       # React components and pages
|   └── public/    # Static assets
|└── README.md    # Project documentation
```

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


## Acknowledgements

- **Socket.io** for enabling real-time communication.
- **MongoDB** for efficient database management.
- **React.js** for the frontend framework.
- **Node.js** and **Express.js** for backend development.


