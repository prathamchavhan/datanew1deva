import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SupabaseProvider } from './SupabaseProvider.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
)