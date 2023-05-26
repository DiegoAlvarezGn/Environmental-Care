import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './routes/Main';
import Home from './routes/Home';
import Environment from './routes/Environment';
import Calculator from './routes/Calculator';
import Profit from './routes/Profit';
import Challenge from './routes/Challenge';

const router = createBrowserRouter([
  { path: "/", element: <App/>,
    children: [
      { element: <Main/>, index: true }, // Default
      { path: "home", element: <Home/>},
      { path: "home/environment", element: <Environment/>},
      { path: "home/calculator", element: <Calculator/>},
      { path: "home/profit", element: <Profit/>},
      { path: "home/challenge", element: <Challenge/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
