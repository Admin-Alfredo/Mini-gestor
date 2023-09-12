import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ProdutoContextProvider } from './context/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ProdutoContextProvider>
      <App />
    </ProdutoContextProvider>
  // </React.StrictMode>,
)
