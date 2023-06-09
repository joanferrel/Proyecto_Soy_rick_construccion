import React from 'react'
import { createRoot } from "react-dom/client";

import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById("root")).render(


  <BrowserRouter>
    <App />
  </BrowserRouter>,// Tods los componenetes a ver se usa una coma ","
)


// Tods los componenetes a ver se usa una coma ","