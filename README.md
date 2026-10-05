# Paradise Nursery 🌿

A responsive plant shopping application built with **React and Redux Toolkit**.

The project simulates a small e-commerce experience where users can browse plants by category, add products to a shopping cart, change quantities, remove items, and view their current cart contents.

It was developed as part of the **IBM Full Stack Software Developer Professional Certificate**.

## Features

- Browse plants across multiple categories
- View product images, descriptions, and prices
- Add plants to the shopping cart
- Track the total number of selected items
- Increase or decrease product quantities
- Remove products from the cart
- Dynamically update cart state
- Continue shopping without losing cart contents
- Interactive landing page and product catalogue

Plant categories include:

- Air Purifying Plants
- Aromatic & Fragrant Plants
- Insect Repellent Plants
- Medicinal Plants
- Low Maintenance Plants

## Tech Stack

- React
- JavaScript
- Redux Toolkit
- React Redux
- Vite
- HTML5
- CSS3

## Redux State Management

The shopping cart is managed globally using **Redux Toolkit**.

The cart slice provides actions for:

```javascript
addItem()
removeItem()
updateQuantity()
```

When a user adds a plant, the application checks whether the product already exists in the cart.

If it does, its quantity is increased. Otherwise, a new cart item is created.

Components access the global cart state using:

```javascript
useSelector()
```

and dispatch changes using:

```javascript
useDispatch()
```

This keeps shopping-cart data synchronized across the application.

## Project Structure

```text
e-plantShopping/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── AboutUs.jsx
│   ├── store.js
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/xboccolo/e-plantShopping.git
```

Navigate to the project:

```bash
cd e-plantShopping
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local application URL in the terminal.


## Background

This project was developed as part of the **IBM Full Stack Software Developer Professional Certificate**.

It provided practical experience building a React application in which multiple components interact with a shared global state.

## Author

**Edoardo Boccolo**

GitHub: [@xboccolo](https://github.com/xboccolo)
