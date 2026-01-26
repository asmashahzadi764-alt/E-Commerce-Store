🛒 E-Commerce Store (Full-Stack Project)
📌 Overview

This E-Commerce Store is a full-stack web application that allows users to browse products, create an account, log in securely, and manage a shopping cart.
The project is built using JavaScript, Node.js, and MongoDB, following best practices for security and scalability.

✨ Features

🔐 User Registration

🔑 Secure User Login (Authentication)

🛍️ Display Store Products

➕ Add Products to Cart

➖ Remove Products from Cart

🧮 Automatic Cart Total Calculation

🗄️ MongoDB Database Integration

🔒 Secure Handling of Sensitive Data

🛠️ Tech Stack
Frontend

JavaScript

HTML

CSS

Backend

Node.js

Express.js

Database

MongoDB

📁 Project Structure
ecommerce-store/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── .env
├── .gitignore
├── package.json
└── README.md

🔐 Security & Data Protection

Security has been a top priority in this project.
No sensitive data is exposed or pushed to the repository.

Environment Variables

All confidential information is stored in a .env file:

MongoDB Connection URI

JWT Secret Key

Server Port

Example .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Git Protection

.env is added to .gitignore

Database credentials and secret keys are never committed

Prevents unauthorized access and data theft

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/ecommerce-store.git

2️⃣ Install Backend Dependencies
cd backend
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add your own values.

4️⃣ Start the Server
npm start

5️⃣ Run the Frontend

Open the frontend files in your browser or start the frontend server if configured separately.

👤 Application Workflow

User registers an account

User logs in securely

Products are displayed on the store page

User adds or removes products from the cart

Cart total updates automatically

📈 Future Enhancements

Payment gateway integration

Admin dashboard for product management

Order history and tracking

Product search and filtering

🧑‍💻 Author

This project was developed for learning and academic purposes, following modern full-stack development practices and security standards.

📜 License

This project is open-source and available for educational use.
