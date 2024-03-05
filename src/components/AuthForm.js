import React, { useState } from 'react';
export default function AuthForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Auth işlemleri burada gerçekleştirilir, örneğin:
      if (isLogin) {
        // Giriş yapma işlemi
        onAuthenticate({ username, password });
      } else {
        // Kayıt olma işlemi
        // Kayıt işlemi burada gerçekleştirilir
      }
    };
  return (
    <form onSubmit={handleFormSubmit}>
    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Create an account' : 'Already have an account? Login'}</p>
  </form>
  )
}
