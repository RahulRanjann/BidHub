import React from 'react';
import NavbarComponent from './component/NavbarComponent';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login';
import About from './component/About';
import Home from './component/Home';
import Bid from './component/Bid';
import Profile from './component/Profile';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/login', element: <Login /> },
    { path: '/bid', element: <Bid /> },
    { path: '/profile', element: <Profile /> },
  ])
 
  // const eventLink = ["https://www.google.com", "https://www.google.com", "https://www.google.com", "https://www.google.com"];
  return (
    <div>
      <NavbarComponent />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
