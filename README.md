# Personal Expense Tracker API

## Description

This is a Node.js-based API for a personal expense tracker, built with Express and MongoDB. The API allows users to manage their authentication and transaction data. It also supports JWT-based authentication and CRUD operations for transactions.

## Features

- JWT-based user authentication
- CRUD operations for transactions
- MongoDB as the primary database
- Cross-Origin Resource Sharing (CORS) enabled
- Hosted using Render

## Technologies Used

- Node.js
- Express
- MongoDB (via Mongoose)
- JWT for Authentication
- CORS for Cross-Origin Resource Sharing
- dotenv for environment variables management

## Prerequisites

Ensure you have the following installed before running the project:

- Node.js
- MongoDB (MongoDB Atlas or a local instance)

## Getting Started

1. **Clone the repository:**

    git clone https://github.com/your-repo/flow-ai-personal-expense-tracker.git
    cd flow-ai-personal-expense-tracker
    

2. **Install dependencies:**

   
    npm install
  

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following variables:

   
    MONGODB_URI="mongodb+srv://akulajayaram96:Harry123@user-logins.2czbbuy.mongodb.net/flow-ai"
    JWT_SECRET="your_jwt_secret"
    PORT=5000
    

4. **Run the application:**

   
    node app.js
    

   The API will be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Register User**
    - `POST /api/auth/register`
    - Request Body:
      ```json
      {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "yourpassword"
      }
      ```
  
- **Login User**
    - `POST /api/auth/login`
    - Request Body:
      ```json
      {
        "email": "john@example.com",
        "password": "yourpassword"
      }
      ```
  
- **Get User Profile (Protected Route)**
    - `GET /api/auth/profile`
    - Requires JWT token in the Authorization header

### Transactions

- **Get All Transactions**
    - `GET /api/transactions`
    - Requires JWT token in the Authorization header
  
- **Create a Transaction**
    - `POST /api/transactions`
    - Request Body:
      ```json
      {
        "amount": 500,
        "description": "Grocery shopping",
        "date": "2024-10-23"
      }
      ```

- **Update a Transaction**
    - `PUT /api/transactions/:id`
    - Requires JWT token in the Authorization header

- **Delete a Transaction**
    - `DELETE /api/transactions/:id`
    - Requires JWT token in the Authorization header

## Environment Variables

Make sure you have the following environment variables set in your `.env` file:

- `MONGODB_URI` – MongoDB connection string.
- `JWT_SECRET` – Secret for signing JWT tokens.
- `PORT` – Port number for the server (default is 5000).

## Deployment

To deploy the API, you can use any platform that supports Node.js (e.g., Heroku, Render). Make sure to set the necessary environment variables in the platform settings.

## Contributing

Feel free to submit a pull request or open an issue if you want to contribute to the project. 

## License

This project is licensed under the MIT License.

