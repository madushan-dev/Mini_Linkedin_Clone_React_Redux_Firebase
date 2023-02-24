import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <header className="App-header">
      <Header/>

      <div className="app__body">
        <Sidebar/>
      </div>
  
      </header>
    </div>
  );
}
 
export default App;
