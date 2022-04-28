import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthContextProvider} from "./Components/context/AuthContext"
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
<BrowserRouter>

<App />

</BrowserRouter>

 </AuthContextProvider>
    
  </React.StrictMode>
)
