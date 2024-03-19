// App.js
import React, { useState } from 'react';
import SignUpForm from './components/SignupForm';
import LogInForm from './components/LoginForm';
import './App.css'

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="App">
      <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
      {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : <LogInForm toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
