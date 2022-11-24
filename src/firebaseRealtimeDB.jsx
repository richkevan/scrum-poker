import {getDatabase, ref, set} from 'firebase/database';
import firebaseApp from './firebase';

const database = getDatabase(firebaseApp);

const createRoom = async ({userId, roomName}) => {
  console.log(userId, roomName)
  try {
    set(ref(database, `rooms/${roomName}`), {
      roomName,
      inviteCode,
      createdBy: userId,
      createdAt: Date.now(),
      participants: [userId],
    });
  }
  catch (error) {
    console.error(error);
  }
}


const firebaseDB = {
  createRoom,
}

export default firebaseDB;