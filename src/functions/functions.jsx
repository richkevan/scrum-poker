import { uuidv4 } from "@firebase/util";


const generateRoom = async () => {
  const room  = {roomName:uuidv4().slice(24,-1), inviteCode:uuidv4().slice(0,6)}
  console.log(room)
  return room
}

const pokerFunctions = {
  generateRoom,
}

export default pokerFunctions