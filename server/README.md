# Bavovna Server Documentation

## Overview

This is the backend server for the Bavovna e-commerce platform. It's built with Node.js, Express, and MongoDB, following the MVC (Model-View-Controller) architecture pattern.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, Passport
- **Email Service**: Nodemailer
- **File Upload**: Multer
- **Validation**: Express Validator
- **Security**: bcrypt for password hashing
- **Payment Processing**: Cloudipsp Node.js SDK
- **Shipping Integration**: Nova Poshta JS

## Project Structure

```
server/
├── middleware/           # Authentication and validation middleware
├── mock/                 # Mock data for development
├── models/               # MongoDB models
├── public/               # Static files
├── routes/               # API route definitions
├── services/             # Business logic and utilities
├── startUp/              # Database initialization
├── uploads/              # Uploaded files storage
├── utils/                # Helper functions
├── app.js                # Application entry point
└── package.json          # Project dependencies
```

## Setup and Installation

### *Clone the repository**

```bash
git clone [repository-url]
cd server
```

### **Install dependencies**

```bash
npm install
```

### **Environment Variables**

Create a `.env` file in the server directory with the following variables:

```env
PORT=8080
API_URL=http://localhost:3000
MONGO_DB_URI=your_mongo_db_uri
ACCESS_SECRET=your-access-key
REFRESH_SECRET=your-refresh-key
VERIFY_SECRET=your-verify-key
SESSION_SECRET=your-session-key
REMEMBER_ME_SECRET=your-remember-key

NP_TEST_ENDPOINT=https://api-stage.novapost.pl/v.1.0/
NP_API_KEY=your-nova-poshta-api-key

BAVOVNA_SPACE_LOGIN=your_email_address_for_sending_emails
BAVOVNA_SPACE_PASSWORD=your_password_for_sending_emails
BAVOVNA_SPACE_HOST=your_host_for_sending_emails
BAVOVNA_SPACE_PORT=your_port_for_sending_emails
```

### **Start the Server**

Development mode:

```bash
npm run serve
```

Production mode:

```bash
npm start
```

## API Documentation

### Authentication Endpoints

- `POST /api/auth/signUp` - User registration
- `POST /api/auth/signInWithPassword` - User login
- `POST /api/auth/token` - Refresh access token
- `POST /api/auth/signOut` - User logout

### User Endpoints

- `GET /api/user/:userId` - Get user profile
- `PATCH /api/user/:userId` - Update user profile
- `DELETE /api/user/:userId` - Delete user account

### Product Endpoints

- `GET /api/items` - Get all products
- `GET /api/items/:itemId` - Get specific product
- `POST /api/items` - Create new product (admin)
- `PATCH /api/items/:itemId` - Update product (admin)
- `DELETE /api/items/:itemId` - Delete product (admin)

### Order Endpoints

- `GET /api/orders` - Get all orders
- `GET /api/orders/:orderId` - Get specific order
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:orderId` - Update order status

### Category Endpoints

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (admin)
- `PATCH /api/categories/:categoryId` - Update category (admin)
- `DELETE /api/categories/:categoryId` - Delete category (admin)

### Newsletter Endpoints

- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

## Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS enabled
- Request validation
- Secure session management

## Models

### User Model

- Email
- Password (hashed)
- Name
- Role (user/admin)
- Orders
- Wishlist

### Product Model

- Name
- Description
- Price
- Categories
- Images
- Stock status
- Variants (size, color)

### Order Model

- User reference
- Products
- Total amount
- Shipping details
- Payment status
- Order status

### Category Model

- Name
- Description
- Parent category
- Image

## Deployment

The server is configured for deployment on Vercel with the following specifications:

- Node.js version: 18.x
- Build command: vercel-build
- Environment variables must be configured in the Vercel dashboard

## Email Service

The application uses Nodemailer for sending:

- Welcome emails
- Order confirmations
- Password reset links
- Newsletter updates
- Promotional codes

## Error Handling

The server implements a centralized error handling mechanism with:

- Custom error classes
- Error logging
- Appropriate HTTP status codes
- Detailed error messages (in development)
- Sanitized error responses (in production)

## Logging

The application uses chalk for console logging with:

- Color-coded log levels
- Server startup logs
- Database connection status
- API request logging
- Error logging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, email our team or open an issue in the repository.
