import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowerRouter} from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowerRouter>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
  </BrowerRouter>
    
 
)
