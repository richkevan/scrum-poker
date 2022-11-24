import "../../styles/header.css"
import Login from "../auth/login"


const Header = () => {
  return (
    <div className="header">
      <h1>Scrum Poker</h1>
      <Login />
    </div>
  )
}

export default Header