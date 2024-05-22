<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

<style>
  .poppins {
    font-family: 'Poppins', sans-serif;
  }
</style>

# <span class="poppins">BAVOVNA</span>

<span class="poppins">Welcome to BAVOVNA, an e-commerce platform designed to provide a seamless shopping experience. This project showcases a modern React and Node.js application with a variety of features, including user authentication, product browsing, shopping cart, and order management.</span>

## <span class="poppins">Table of Contents</span>

- <span class="poppins">[Features](#span-classpoppinsfeaturesspan)</span>
- <span class="poppins">[Tech Stack](#span-classpoppinstech-stackspan)</span>
- <span class="poppins">[Installation](#span-classpoppinsinstallationspan)</span>
- <span class="poppins">[Usage](#span-classpoppinsusagespan)</span>
- <span class="poppins">[Contributing](#span-classpoppinscontributingspan)</span>
- <span class="poppins">[License](#span-classpoppinslicensespan)</span>
- <span class="poppins">[Acknowledgements](#span-classpoppinsacknowledgementsspan)</span>
- <span class="poppins">[Developers](#span-classpoppinsdevelopersspan)</span>

## <span class="poppins">Features</span>

- <span class="poppins">User authentication and authorization by email and google account</span>
- <span class="poppins">Product browsing with categories and filters</span>
- <span class="poppins">Shopping cart management</span>
- <span class="poppins">Delivery options management</span>
- <span class="poppins">Payment options management</span>
- <span class="poppins">Wishlist management</span>
- <span class="poppins">Order placement and confirmation</span>
- <span class="poppins">Customer cabinet with info about all orders and delivery status</span>
- <span class="poppins">Ability to save delivery addresses</span>
- <span class="poppins">Ability to use PROMO CODES</span>
- <span class="poppins">Email notifications for registration, newsletters and order confirmation</span>
- <span class="poppins">Responsive design for a seamless experience on all devices</span>

[//]: # (- <span class="poppins">Admin panel for managing products and orders</span>)

## <span class="poppins">Tech Stack</span>
### <span class="poppins">Frontend</span>
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A Predictable State Container for JS Apps.
- **Formik**: Build forms in React, without the tears.
- **Yup**: JavaScript schema builder for value parsing and validation.
- **Axios**: Promise based HTTP client for the browser and node.js.
- **React Router**: Declarative routing for React.
- **SASS**: CSS with superpowers.
- **Swiper**: Modern mobile touch slider.
- **React Icons**: Include popular icons in your React projects easily.
- **React Select**: A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
- **Google OAuth**: Integrate Google Sign-In into your web app.
- **JS Cookie**: A simple, lightweight JavaScript API for handling cookies.

### <span class="poppins">Backend</span>
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: The database for modern applications.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: A library to help you hash passwords.
- **Nodemailer**: Send e-mails with Node.JS – easy as cake!
- **Express Validator**: An express.js middleware for validator.
- **Cors**: Node.js package for providing a Connect/Express middleware that can be used to enable CORS.
- **Compression**: Node.js compression middleware.
- **Multer**: Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.

## <span class="poppins">Installation</span>

### <span class="poppins">Prerequisites</span>

- <span class="poppins">Node.js</span>
- <span class="poppins">MongoDB</span>
- <span class="poppins">Docker</span>

### <span class="poppins">Steps</span>

1. <span class="poppins">Clone the repository:</span>

    ```bash
    git clone https://github.com/yourusername/bavovna.git
    cd bavovna
    ```

2. <span class="poppins">Install dependencies for both frontend and backend:</span>

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. <span class="poppins">Set up environment variables:</span>

   Create a `.env` file in the `server` directory and add the following variables:</span>

    ```env
    PORT=5000
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```

4. <span class="poppins">Start the development servers:</span>

    ```bash
    cd server
    npm run dev
    cd ../client
    npm start
    ```

5. <span class="poppins">Open your browser and navigate to `http://localhost:3000`.</span>

### <span class="poppins">Quick install for observe only</span>

### <span class="poppins">Steps</span>

1. <span class="poppins">Download the Docker image from the repository:</span>

    ```bash
    docker pull rokokos97/pet-project
    ```
   
2. <span class="poppins">Deploy the container using the following command:</span>

    ```bash
    docker run -d -p 8080:8080 --name pet-project --rm rokokos97/pet-project
    ```
3. <span class="poppins">Once the container is successfully deployed, open your browser and navigate to:</span>

    ```plaintext
    http://localhost:8080
    ```

## <span class="poppins">Live Demo</span>

### <span class="poppins">You can also visit the working project at the following link:</span> [BAVOVNA](https://anvovab.space) 


## <span class="poppins">Usage</span>

### <span class="poppins">User Authentication</span>

- <span class="poppins">Sign up, sign in, and sign out.</span>
- <span class="poppins">Sign up, sign in with Google account.</span>
- <span class="poppins">Password recovery and reset.</span>

### <span class="poppins">Shopping</span>

- <span class="poppins">Browse products by categories.</span>
- <span class="poppins">Add products to the shopping cart.</span>
- <span class="poppins">Manage shopping cart.</span>
- <span class="poppins">Manage delivery with Nova Poshta</span>
- <span class="poppins">Place orders and receive confirmation emails.</span>

### User Panel

- <span class="poppins">Manage account information</span>
- <span class="poppins">Manage delivery options</span>
- <span class="poppins">View orders and delivery status</span>

## <span class="poppins">Contributing</span>

<span class="poppins">Project still in progress. Contributions are welcome! Please follow these steps to contribute:</span>

1. <span class="poppins">Fork the repository.</span>
2. <span class="poppins">Create a new branch: `git checkout -b feature/your-feature-name`.</span>
3. <span class="poppins">Make your changes and commit them: `git commit -m 'Add some feature'`.</span>
4. <span class="poppins">Push to the branch: `git push origin feature/your-feature-name`.</span>
5. <span class="poppins"> Open a pull request.</span>

## <span class="poppins">License</span>

<span class="poppins">This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.</span>

## <span class="poppins">Acknowledgements</span>

- <span class="poppins">[Formik](https://formik.org/)</span>
- <span class="poppins">[Yup](https://github.com/jquense/yup)</span>
- <span class="poppins">[Nodemailer](https://nodemailer.com/)</span>
- <span class="poppins">[MongoDB](https://www.mongodb.com/)</span>
- <span class="poppins">[Express.js](https://expressjs.com/)</span>
- <span class="poppins">[React](https://reactjs.org/)</span>
- <span class="poppins">[Redux Toolkit](https://redux-toolkit.js.org/)</span>
- <span class="poppins">[React Router](https://reactrouter.com/)</span>
- <span class="poppins">[Axios](https://axios-http.com/)</span>
- <span class="poppins">[Swiper](https://swiperjs.com/)</span>
- <span class="poppins">[Sass](https://sass-lang.com/)</span>
- <span class="poppins">[React Fast Marquee](https://www.react-fast-marquee.com/)</span>
- <span class="poppins">[react-phone-input-2](https://www.npmjs.com/package/react-phone-input-2)</span>
- <span class="poppins">[jsonwebtoken](https://jwt.io/)</span>
- <span class="poppins">[bcrypt](https://www.npmjs.com/package/bcrypt)</span>
- <span class="poppins">[cors](https://expressjs.com/en/resources/middleware/cors.html)</span>
- <span class="poppins">[Multer](https://github.com/expressjs/multer)</span>
- <span class="poppins">[@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)</span>
- <span class="poppins">[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)</span>
- <span class="poppins">[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)</span>
- <span class="poppins">[js-cookie](https://github.com/js-cookie/js-cookie)</span>
- <span class="poppins">[nanoid](https://github.com/ai/nanoid)</span>
- <span class="poppins">[react-icons](https://react-icons.github.io/react-icons/)</span>
- <span class="poppins">[react-select](https://react-select.com/)</span>
- <span class="poppins">[@craco/craco](https://github.com/gsoft-inc/craco)</span>
- <span class="poppins">[eslint](https://eslint.org/)</span>
- <span class="poppins">[jest](https://jestjs.io/)</span>

## <span class="poppins">Developers</span>

- <span class="poppins">[Rostyslav Lisovyi](https://github.com/rokokos97)</span> - Front-end / Back-end
- <span class="poppins">[Vitalii Mamchur](https://github.com/Vitalii-Mamchur)</span> - Initial work / Front-End


### <span class="poppins">Thank you for checking out BAVOVNA! If you have any questions or suggestions, feel free to open an issue or contact me.</span>
