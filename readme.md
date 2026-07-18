# E-Commerce backend API App

## Description
This is a robust RESTful API application built to handle the backend operations of an e-commerce platform. It provides endpoints for client and server interactions, allowing users to seamlessly manage database records. Key features include creating, reading, updating, and deleting (CRUD) products, as well as managing shopping carts by adding and reading cart items.

## Technologies Used
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework for routing and middleware.
* **MongoDB & Mongoose:** NoSQL database and Object Data Modeling (ODM) library for data storage.
* **Security:** 
  * `helmet`: Secures Express apps by setting various HTTP headers.
  * `mongoose-sanitize`: Prevents MongoDB Operator Injection, protecting the server from NoSQL injection.
* **dotenv:** Manages environment variables.

## Installation

1. **Clone the repository:**
   ```bash 
   git clone https://github.com/mohamedgamal2010/DECI4-S-415510_eCommerce-Backend.git
   ```
2. **Navigate into the directory:**
   ```bash 
   cd e-commerce-API-App
   ```
3. **Install dependencies:**
   ```bash 
   npm install
   ```
4. **Environment Setup:**
   Create a `.env` file in the root directory and configure your environment variables (e.g., Database URI, Port):
   ```
   PORT=3000 
   MONGO_URL=your_mongodb_connection_string
   ```

## Running the Project

To start the server in development or production mode, run the following command in your terminal:

```bash
npm start
```
*(Note: If you use `nodemon` for development, you can run `npm run dev` assuming it is configured in your `package.json` scripts).*

## Link of github repo
```bash 
https://github.com/mohamedgamal2010/DECI4-S-415510_eCommerce-Backend.git
```