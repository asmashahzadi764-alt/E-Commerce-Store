E-Commerce Store (Full-Stack Project)

Overview
This E-Commerce Store is a full-stack web application that allows users to register, log in securely, browse products, and manage a shopping cart. The application is built using JavaScript, Node.js, and MongoDB, following modern development practices with a focus on security and scalability.

Features
User Registration
User Login with Authentication
Display Products in Store
Add Products to Cart
Remove Products from Cart
Automatic Cart Total Calculation
MongoDB Database Integration
Secure Handling of Sensitive Data

Tech Stack
Frontend: JavaScript, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB

Project Structure
ecommerce-store/
backend/
models/
routes/
controllers/
middleware/
server.js
frontend/
components/
pages/
assets/
.env
.gitignore
package.json
README.md

Security and Sensitive Data Protection
This project is designed with security as a priority. No sensitive or confidential data is exposed in the repository. All critical information such as database credentials, secret keys, and server configuration values are stored securely using environment variables.

Sensitive data is kept inside a .env file, which includes the MongoDB connection string, JWT secret key, and server port configuration. The .env file is added to .gitignore to ensure that it is never committed to the repository. This approach prevents unauthorized access, protects user data, and reduces the risk of credential theft.

Environment Variables Example
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

How to Run the Project
Clone the repository from GitHub.
Navigate to the backend directory and install dependencies using npm install.
Create a .env file in the root directory and add your own configuration values.
Start the backend server using npm start.
Run or open the frontend separately depending on your setup.

Application Workflow
The user registers an account.
The user logs in using secure authentication.
Products are displayed on the store page.
The user adds or removes products from the cart.
The total cart value is calculated automatically.

Future Enhancements
Online payment gateway integration
Admin panel for product and order management
Order history and tracking system
Product search and filtering functionality

Author Note
This project was developed for learning and academic purposes. It demonstrates full-stack development concepts, RESTful APIs, database integration, and secure handling of sensitive data using industry best practices.

License
This project is open-source and intended for educational use only.
