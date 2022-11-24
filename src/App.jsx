import '../styles/App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Login from './auth/login'
import { useFirebaseAuth } from "./auth-context/firebase-auth-context"
import Header from './components/header'


function App() {
  const user = useFirebaseAuth()
  
  return (
    <div className="App">
      <div>
        <Header />
      </div>
    </div>
  )
}

export default App
