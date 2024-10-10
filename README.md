Restaurant Page
# Restaurant Online

This project is a web application for a restaurant where users can view the menu, add items to the cart, and proceed with purchases. The app also includes login and registration functionalities.

## Features

- **Restaurant Menu**: Users can browse available products via an interactive carousel.
- **Shopping Cart**: Allows users to add items to the cart, view the total, and manage the selected products.
- **Login and Registration**: Users can create an account or log in to manage their orders.
- **Responsive Design**: The application adapts to different screen sizes.
- **Dynamic Navigation**: The header and footer only appear when needed, offering a better user experience.

## Project Structure

This project is organized into several key components stored in the `components` folder, while the different pages are in the `pages` folder.

```text
/src
  ├── /assets
  │   └── /menu
  │       ├── services.svg
  │       └── products.svg
  ├── /components
  │   ├── Header.jsx
  │   ├── Footer.jsx
  │   ├── AboutUs.jsx
  │   ├── Carousel.jsx
  │   ├── ShoppingCart.jsx
  │   ├── Login.jsx
  │   └── Register.jsx
  ├── /pages
  │   └── Services.jsx
  ├── App.js
  └── index.js
  ```
 ## Installation
To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/FJFloresG/FinalProjectDevops.git
   ```

2. Install the dependencies:
    ```bash
   npm install
    ```
3. Start the development server:
     ```bash
   npm run dev
    ```
    Open your browser and go to http://localhost:3000 to view the app.

## Usage
### Main Navigation
* Home: Displays the "About Us" section and a product carousel.
* Services: Shows all available restaurant products and services.
* Shopping Cart: Review added products, view subtotals, and proceed with the purchase.
* Login: Allows users to authenticate.
* Register: Lets users create a new account.
### Key Components
* Header: Dynamically switches between products and services sections based on the current route.
* Carousel: Displays the restaurant’s products in an interactive format, allowing users to add items to their cart.
* Shopping Cart: Lets users manage the products in their cart, showing the total amount to pay.
### Global States
The project manages several global states using React's useState to track user interaction and cart data:

* allProducts: Stores the products added to the cart.
total: Tracks the total price of the cart.
* countProducts: Counts the number of products in the cart.
* loggedIn: Manages the user's login state.
### Routes
The app uses react-router-dom for routing between different pages. The main routes are:

* /: The homepage, showing the "About Us" section and a product carousel.
* /login: The login page.
* /register: The registration page.
* /services: The services/products page.
* /cart: The shopping cart page, detailing the selected items.
### Future Improvements
* Payment Gateway Integration: Adding online payment functionality to complete purchases.
* Order History: Allowing users to view previous orders.
* UI Enhancements: Improving the visual design and user experience.

## Main Dependencies
* React: Main library for building the user interface.
* react-router-dom: Handles routing within the app.
* React Hooks: Used for state management and side effects.
