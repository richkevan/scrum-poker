import { useEffect, useState } from "react";
import firebaseAuthService from "../firebaseAuth"
import { useFirebaseAuth } from "../auth-context/firebase-auth-context"
import firebaseDB from "../firebaseRealtimeDB"
import pokerFunctions from "../functions/functions";

const Login = () => {
  const { signIn, userLogout } = firebaseAuthService;
  const { createRoom } = firebaseDB;
  const { generateRoom } = pokerFunctions;
  const [displayName, setDisplayName] = useState('Rich')
  const [userRole, setUserRole] = useState('admin')
  const user = useFirebaseAuth()

  useEffect(() => {
    console.log(user)
  },[user, displayName])

  const handleLogin = async (e) => {
    setDisplayName('Rich')
    await signIn({displayName, userRole})
    const roomName = await generateRoom()
    console.log('room: ', roomName, 'user uuid: ', user)
    // await createRoom({userId:us, roomName:'testRoom'})
    console.log(user)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    setDisplayName('Rich')
    userLogout()
  }

  return (
    <div>
      {user ? 
      (
        <>
        <p>Welcome {user?.displayName}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
      )
      :(
      <>
        <button>Create Room</button>
        <button onClick={handleLogin}>Join Room</button>
      </>
      )
    }
      
    </div>
  )
}

export default Login