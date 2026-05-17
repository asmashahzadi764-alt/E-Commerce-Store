<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=🛒%20E-Commerce%20Store&fontSize=40&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Full-Stack%20Web%20Application&descAlignY=55&descSize=20"/>

</div>

---

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 📌 Overview

A **full-stack E-Commerce Store** that allows users to register, log in securely, browse products, and manage a shopping cart. Built using **JavaScript, Node.js, and MongoDB**, following modern development practices with a focus on **security and scalability**.

---

## ✨ Features

| Feature | Status |
|--------|--------|
| 👤 User Registration | ✅ Done |
| 🔐 User Login with Authentication | ✅ Done |
| 🛍️ Display Products in Store | ✅ Done |
| ➕ Add Products to Cart | ✅ Done |
| ➖ Remove Products from Cart | ✅ Done |
| 🧮 Automatic Cart Total Calculation | ✅ Done |
| 🗄️ MongoDB Database Integration | ✅ Done |
| 🔒 Secure Handling of Sensitive Data | ✅ Done |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Auth** | JWT (JSON Web Tokens) |
| **Security** | Environment Variables, .gitignore |

---

## 📁 Project Structure

```
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
├── .env              ← (never committed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🔒 Security & Sensitive Data Protection

This project is designed with **security as a priority**. No sensitive or confidential data is exposed in the repository.

- 🔑 All critical values (DB credentials, secret keys) are stored in **environment variables**
- 📄 A `.env` file holds the MongoDB URI, JWT secret, and server port
- 🚫 The `.env` file is listed in `.gitignore` — it is **never committed** to the repository
- ✅ This prevents unauthorized access, protects user data, and reduces credential theft risk

### Environment Variables Example

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🚀 How to Run the Project

**1.** Clone the repository
```bash
git clone https://github.com/asmashahzadi764-alt/ecommerce-store.git
```

**2.** Navigate to backend and install dependencies
```bash
cd backend
npm install
```

**3.** Create a `.env` file in the root directory and add your values
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**4.** Start the backend server
```bash
npm start
```

**5.** Open the frontend in your browser or run it separately based on your setup.

---

## 🔄 Application Workflow

```
User Registers
     ↓
User Logs In (JWT Auth)
     ↓
Products Displayed on Store
     ↓
User Adds / Removes Products
     ↓
Cart Total Auto-Calculated
```

---

## 🌱 Future Enhancements

- 💳 Online payment gateway integration
- 🛠️ Admin panel for product and order management
- 📦 Order history and tracking system
- 🔍 Product search and filtering functionality

---

## 👩‍💻 Author Note

> This project was developed for **learning and academic purposes**. It demonstrates full-stack development concepts, RESTful APIs, database integration, and secure handling of sensitive data using industry best practices.

---

## 📄 License

This project is **open-source** and intended for **educational use only**.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&animation=twinkling"/>

</div>
