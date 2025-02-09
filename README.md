# BAVOVNA

Welcome to **BAVOVNA**, an e-commerce platform designed to provide a seamless shopping experience.
The project consists of a **React** frontend and **Node.js** backend, with **MongoDB** as the database.

---

## Run Locally

Clone the project

```bash
  git clone https://github.com/rokokos97/Bavovna.git
```

Go to the project **server** directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Go to the project **server** directory

```bash
  cd server
```

Then create .env file in the **server** directory and add the following code

```bash
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
Go to the project **client** directory

```bash
  cd client
```
Install dependencies

```bash
  npm install
```

Go to the project **server** directory

```bash
  cd client
```

Then create .env file in the **client** directory and add the following code

```bash
   REACT_APP_API_ENDPOINT=http://localhost:8080/api/
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_NP_API_KEY=your-nova-poshta-api-key
   REACT_APP_CURRENCYLAYER_API_KEY=your-currencylayer-api-key
   REACT_APP_CURRENCYLAYER_API_ENDPOINT=http://api.currencylayer.com/
   REACT_APP_PAYPAL_CLIENT_ID=your-paypal-client-id
   REACT_APP_FONDY_MERCHANT_ID=your-fondy-merchant-id
```

Start the server

```bash
  npm run serve
```

Start the client

```bash
  npm start
```

---

## 📌 Table of Contents

- [BAVOVNA](#bavovna)
  - [Run Locally](#run-locally)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
    - [**Frontend**](#frontend)
    - [**Backend**](#backend)
  - [**Live Demo**](#live-demo)
  - [🤝 Contributing](#-contributing)
  - [Server API Documentation](#server-api-documentation)
    - [Server structure](#server-structure)
  - [📜 License](#-license)
  - [👨‍💻 Developers](#-developers)
  - [Thank you for checking out **BAVOVNA**](#thank-you-for-checking-out-bavovna)

---

## 🚀 Features

- 🔐 User authentication (email & Google login)
- 🛒 Shopping cart & Wishlist management
- 📦 Order placement & delivery tracking
- 🎁 Promo codes support
- 📩 Email notifications (registration, newsletters, order confirmation)
- 📱 Responsive design

---

## 🛠 Tech Stack

### **Frontend**

- React | Redux | Formik + Yup | Axios | React Router | SCSS
- Swiper.js | React Icons | Google OAuth | JS Cookie

### **Backend**

- Node.js + Express | MongoDB + Mongoose | JWT
- Bcrypt (password hashing) | Nodemailer (emails)
- Express Validator | Multer (file uploads) | CORS

---

## **Live Demo**

Check out the live client: [**BAVOVNA APP**](https://bavovna-app.vercel.app/)
Check out the live server: [**BAVOVNA API**](https://bavovna-api.vercel.app/)

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the repo** 📌
2. Create a new branch:

   ```bash

   git checkout -b feature/your-feature-name

   ```

3. Make changes & commit:

   ```bash
   git commit -m "Add feature X"
   ```

4. Push & create a pull request:

   ```bash
   git push origin feature/your-feature-name
   ```

🚀 **Your contributions are appreciated!**

---

## Server API Documentation

The application is built on the MVC architecture pattern,
where the Model represents the data, the View represents
the user interface, and the Controller manages the communication
between the Model and the View.

### Server structure

| Directory / File                   | Description                                            |
|------------------------------------| -------------------------------------------------------|
| `src/`                             | Main source code directory                             |
| ├── `middleware/`                  | Middleware functions for authentication and validation |
| │ └── `auth.middleware.js`         | Middleware for handling authentication logic           |
| ├── `mock/`                        | Mock data used for development and testing             |
| │ └── `categories.json`            | Mock data for product categories                       |
| │ └── `colors.json`                | Mock data for available colors                         |
| │ └── `novaPoshtaCities.json`      | Mock data for Nova Poshta city locations               |
| │ └── `novaPoshtaWarehouse.json`   | Mock data for Nova Poshta warehouse locations          |
| ├── `models/`                      | Database models representing application entities      |
| │ └── `Category.js`                | Model for product categories                           |
| │ └── `Colors.js`                  | Model for color attributes                             |
| │ └── `Item.js`                    | Model for product items                                |
| │ └── `NewsletterEmail.js`         | Model for newsletter email subscriptions               |
| │ └── `Order.js`                   | Model for customer orders                              |
| │ └── `Token.js`                   | Model for authentication tokens                        |
| │ └── `User.js`                    | Model for user accounts                                |
| ├── `public/`                      | Static public assets (images, HTML files, etc.)        |
| │ └── `img/`                       | Directory for storing image assets                     |
| │ └── `index.html`                 | Default static HTML file                               |
| ├── `routes/`                      | API route definitions for handling requests            |
| │ └── `index.js`                   | Main router combining all routes                       |
| │ └── `auth.router.js`             | Routes for user authentication                         |
| │ └── `category.router.js`         | Routes for product categories                          |
| │ └── `colors.router.js`           | Routes for product colors                              |
| │ └── `item.router.js`             | Routes for product items                               |
| │ └── `newsletter.router.js`       | Routes for newsletter subscriptions                    |
| │ └── `np.router.js`               | Routes for Nova Poshta services                        |
| │ └── `orders.router.js`           | Routes for order management                            |
| │ └── `upload.router.js`           | Routes for handling file uploads                       |
| │ └── `user.router.js`             | Routes for user management                             |
| ├── `services/`                    | Business logic services and utilities                  |
| │ └── `mail_options/`              | Email templates for various notifications              |
| │ │ └── `newsletter_email.js`      | Email template for newsletters                         |
| │ │ └── `order_mail.js`            | Email template for order confirmations                 |
| │ │ └── `promocode_email.js`       | Email template for promotional codes                   |
| │ │ └── `reset_password_option.js` | Email template for password reset                      |
| │ │ └── `verify_email_option.js`   | Email template for email verification                  |
| │ └── `mailer.js`                  | Service for handling email sending                     |
| │ └── `token.service.js`           | Service for generating and verifying tokens            |
| ├── `startUp/`                     | Initial setup scripts for the application              |
| │ └── `initDatabase.js`            | Script for initializing database connections           |
| ├── `uploads/`                     | Directory for storing uploaded files                   |
| ├── `utils/`                       | General utility functions                              |
| │ └── `isTokenValid.js`            | Utility function for token validation                  |
| `app.js`                           | Main application entry point                           |
| `.prettierrc`                      | Prettier configuration file                            |
| `.gitignore`                       | Git configuration to ignore specific files             |
| `package.json`                     | Project dependencies and scripts                       |
| `README.md`                        | Project documentation                                  |
| `vercel.json`                      | Vercel deployment configuration                        |

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE.txt) file for details.

---

## 👨‍💻 Developers

- **[Rostyslav Lisovyi](https://github.com/rokokos97)** – Full Stack Developer
- **[Vitalii Mamchur](https://github.com/Vitalii-Mamchur)** – Frontend Developer

---

## Thank you for checking out **BAVOVNA**

If you have any questions, feel free to **open an issue** or **contact us**.
