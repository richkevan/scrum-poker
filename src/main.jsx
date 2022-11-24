import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirebaseAuthProvider } from './auth-context/firebase-auth-context'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
        <App />
    </FirebaseAuthProvider> 
  </React.StrictMode>
)
