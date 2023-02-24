import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayname,
          photoURL:userAuth.photoURL
      }));

      }else{
       
      }
    })
  },[])
  return (
    <div className="app">
      <header className="App-header">
      <Header/>
      </header>
      {!user ? <Login/> :(
          
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
    
          </div>
      )}
    </div>
  );
}
 
export default App;
