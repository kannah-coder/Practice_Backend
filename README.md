# 📘 Student Management API + 🛒 E-Commerce Product/Cart API  
### 🚀 Full MongoDB + Express Backend (Two Mini Projects Combined)

This repository contains two complete REST APIs:

- **Student Management System API (Port: 3002)**
- **E-Commerce Product + Cart API (Port: 3000)**

Both are fully CRUD-enabled, clean, beginner-friendly, and perfect for portfolio projects.

📁 Folder Structure
├── Movies.js
├── backend.js
├──README.md
├── app.js
├── librarySchema.js
├── server.js
├── server5.js
└── student-server.js


---

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON REST APIs  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kannah-coder/Pratice_Backend.git
cd Pratice_Backend
```
2️⃣ Install Dependencies
npm install

3️⃣ Start MongoDB
mongod

4️⃣ Start Each Server
node studentServer.js   # Runs on PORT 3002
node productServer.js   # Runs on PORT 3000

🎓 STUDENT MANAGEMENT SYSTEM API (PORT 3002)

A complete backend system to manage students using MongoDB.
 

🌱 Seed Route
Insert Sample Students
GET /api/seed

➕ Create Routes
Add One Student
POST /students

{
  "name": "John Doe",
  "course": "BCA",
  "year": 1
}

Add Multiple Students
POST /students/bulk

🔍 Read Routes

GET /students — Get all students

GET /students/:id — Get student by ID

GET /students/course/:course — Get students by course

✏️ Update Routes

PUT /students/:id — Update a student

PUT /students/course/:course — Update all students in a course

❌ Delete Routes

DELETE /students/:id — Delete one

DELETE /students/course/:course — Delete by course

🛒 E-COMMERCE PRODUCT + CART API (PORT 3000)

Backend for product listing and cart operations.

📌 Base URL
http://localhost:3000

🌱 Seed Route
POST /api/seed


Adds sample products and clears cart.

🛍️ PRODUCTS API
Add Product
POST /products

Get All Products
GET /products

Get Product by ID
GET /products/:id

Update Product
PUT /products/:id

Delete Product
DELETE /products/:id

🛒 CART API
Add to Cart
POST /cart

Get Cart Items
GET /cart

Remove Cart Item
DELETE /cart/:id

Clear Cart
DELETE /cart

## 🎯 How to run this

 Install required packages:

 npm init -y
 npm install express mongoose


 
