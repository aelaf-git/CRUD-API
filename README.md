# CRUD API

A comprehensive Node.js and Express-based CRUD API built for managing users and subscriptions. This project features integrated MongoDB connectivity via Mongoose and structured environment management.

## 🚀 Features

- **User Authentication**: Secure sign-up, sign-in, and sign-out routes.
- **User Management**: Full CRUD operations for user profiles.
- **Subscription Management**: Create, update, delete, and track subscriptions, including upcoming renewals.
- **Environment Management**: Support for environment-specific configurations (`.env.development.local`, `.env.production.local`).
- **Database Integration**: Seamless connection to MongoDB.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Dev Tool**: [nodemon](https://nodemon.io/)

## 📋 Prerequisites

- Node.js installed on your machine.
- A running MongoDB instance (local or Atlas).

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aelaf-git/CRUD-API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CRUD-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🔐 Environment Variables

Create a file named `.env.development.local` (or `.env.production.local` based on your `NODE_ENV`) in the root directory and add the following:

```env
PORT=5500
DB_URI=your_mongodb_connection_string
```

## 🚀 Running the App

### Development Mode (with nodemon)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## 🛣️ API Endpoints

### Auth Routes (`/api/v1/auth`)

| Method | Endpoint    | Description               |
| :----- | :---------- | :------------------------ |
| POST   | `/sign-up`  | Create a new user account |
| POST   | `/sign-in`  | Authenticate a user       |
| POST   | `/sign-out` | Log out the current user  |

### User Routes (`/api/v1/users`)

| Method | Endpoint | Description                 |
| :----- | :------- | :-------------------------- |
| GET    | `/`      | Fetch all users             |
| GET    | `/:id`   | Fetch a specific user by ID |
| POST   | `/`      | Create a new user           |
| PUT    | `/:id`   | Update user details         |
| DELETE | `/:id`   | Remove a user               |

### Subscription Routes (`/api/v1/subscriptions`)

| Method | Endpoint             | Description                               |
| :----- | :------------------- | :---------------------------------------- |
| GET    | `/`                  | Fetch all subscriptions                   |
| GET    | `/:id`               | Fetch a specific subscription             |
| POST   | `/`                  | Create a new subscription                 |
| PUT    | `/:id`               | Update a subscription                     |
| DELETE | `/:id`               | Cancel/Delete a subscription              |
| GET    | `/user/:id`          | Get all subscriptions for a specific user |
| PUT    | `/user/:id/cancel`   | Cancel a subscription for a user          |
| GET    | `/upcoming-renewals` | List subscriptions due for renewal        |

## 📄 License

This project is private and for educational purposes.
