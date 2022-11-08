import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDjclId9AjJ1EUKC8T0Evpg_-a29UjRLt0",
    authDomain: "fb-auth-cj.firebaseapp.com",
    projectId: "fb-auth-cj",
    storageBucket: "fb-auth-cj.appspot.com",
    messagingSenderId: "437335609197",
    appId: "1:437335609197:web:27ca8f6ece801f1e6e5464"
};

export default function  Signup({setUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignup = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) //this connects to firebase 
        const auth = getAuth(app) // connects us to firebase auth
        const response = await signInWithEmailAndPassword(auth, email, password) //sign us in 
            .catch(alert)
       setUser(response.user)
    }
    return (
        <>

            <h1> Signup</h1>

            <form onSubmit={handleSignup}>
                <label htmlFor="email">Email:{''}
                    <input type='email' name='email'
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="Password">Password:{''}
                    <input type='Password' name='Password'
                        value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="*****" />
                </label><br />
                <button type="submit"> Signup</button>
            </form>
        </>
    )
}