import React, { useState } from 'react';
import '../style/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted with:', email);
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="email" className="login-label">Username or Email</label>
      <input 
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username or Email"
        className="login-input"
      />
      <button type="submit" className="continue-btn">Continue</button>
    </form>
  );
};

export default LoginForm;
