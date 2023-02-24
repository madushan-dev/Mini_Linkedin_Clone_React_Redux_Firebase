import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const [name,setName] = useState(''); 
    const [profilePic,setProfilePic] = useState('');
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL
            })
            );
        }).catch(error => alert(error.message));


    };

    const register = () => {
        if(!name){
            return alert("Please enter your full name!");
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic
                }));

            });
        }).catch(error => alert(error.message));
    
    };
    
  return (
    <div className='login'>
        <img src="https://ugtechmag.com/wp-content/uploads/2022/10/Linkedin-Logo.png" alt="" />
        <form>
            <input  value={name} type="text" placeholder='Full name required if you registering'onChange={e => setName(e.target.value)}/>
            <input   value={profilePic} type="text" placeholder='Profile pic Url (optional)' onChange={e => setProfilePic(e.target.value)}/>
            <input value={email} type="email" onChange={e => setEmail(e.target.value)}/>
            <input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login