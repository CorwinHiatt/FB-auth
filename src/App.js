import { useState } from 'react'
import Login from './scenes/Login';
import Protected from './scenes/Protected'
import Signup from './scenes/Signup';


function App() {
  const [user, setUser] = useState()
  return (
    <>
      {!user
        ? <Login setUser={setUser} />
        : <Protected />

      }
    </>
  );
}

export default App;