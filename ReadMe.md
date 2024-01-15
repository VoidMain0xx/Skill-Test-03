# Ecommerce Inventory Management API

## Setup
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up the `.env` file with MongoDB connection details.

## Usage
- Run the server: `npm start`
- Test the API using Postman.

## API Endpoints

### Create a new product
- **URL**: POST `/products/create`
- **Request Body**:
  ```json
  {
    "name": "laptop",
    "quantity": 10
  }
