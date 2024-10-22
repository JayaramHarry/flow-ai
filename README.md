# Personal Expense Tracker API

## Description

This API allows users to manage their personal income and expenses. It provides endpoints for adding transactions, retrieving past transactions, and summarizing financial data.

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your MongoDB URI in a `.env` file.
4. Start the server with `npm run dev`.

### API Endpoints

#### Transactions

- `POST /api/transactions`: Add a new transaction.
- `GET /api/transactions`: Retrieve all transactions.
- `GET /api/transactions/:id`: Retrieve a transaction by ID.
- `PUT /api/transactions/:id`: Update a transaction by ID.
- `DELETE /api/transactions/:id`: Delete a transaction by ID.

#### Summary

- `GET /api/summary`: Retrieve a summary of total income, total expenses, and balance.

### Postman Collection

![Postman Screenshot](path_to_postman_screenshot)
