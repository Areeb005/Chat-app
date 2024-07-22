# React Chat Application

This project is a simple chat application built with React, Redux, and Material-UI. It demonstrates how to create a basic chat interface with conversation lists and message displays.

## Features

- Conversation list display
- Active conversation view
- Message sending and display
- Basic search functionality
- Responsive design

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Setting up a Vite + React Project

1. Create a new Vite project with the React template:
   ```bash
   npm create vite@latest my-chat-app -- --template react
   ```

2. Navigate to the project directory:
   ```bash
   cd my-chat-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install additional required packages:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled @reduxjs/toolkit react-redux
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

### Project Structure

```
my-chat-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── Avatar.png
│   │   ├── react.svg
│   │   ├── user2.png
│   │   ├── user3.png
│   ├── components/
│   │   ├── ChatArea.jsx
│   │   ├── ConversationList.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   ├── redux/
│   │   ├── chatSlice.js
│   │   ├── store.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

### Usage

1. Clone this repository to your local machine.
2. Follow the "Setting up a Vite + React Project" steps above.
3. Replace the contents of `src/App.jsx` with the provided `App.jsx` code.
4. Create the additional files (`redux/chatSlice.js`, `redux/store.js`, `components/ConversationList.jsx`, `components/ChatArea.jsx`, `components/Footer.jsx`, `components/Navbar.jsx`) and add the respective code.
5. Run the development server with `npm run dev`.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [Material-UI](https://mui.com/) - React components for faster and easier web development
