import { useState } from 'react'
import Login from './scenes/Login';
import Protected from './scenes/Protected'
import Signup from './scenes/Signup';


function App() {
  const [user, setUser] = useState()
  return (
    <>
      {!user
        ? <><Login setUser={setUser} /> <Signup setUser={setUser}></Signup></>
        : <Protected />
        
      }
    </>
  );
}

export default App;