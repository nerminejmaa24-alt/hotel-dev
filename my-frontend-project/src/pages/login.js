import React, { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch('http://localhost:5000/api/auth/login', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email: email,
          password: password
        })

      });

      const data = await res.json();

      setMessage(data.message);
    }
    catch(error){

      setMessage("⚠️ Serveur non disponible");

    }

  };

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#f0f2f5"
    }}>

      <div style={{
        backgroundColor:"white",
        padding:"40px",
        borderRadius:"10px",
        boxShadow:"0px 0px 15px gray",
        width:"350px",
        textAlign:"center"
      }}>

        <h2>Connexion</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"15px",
              borderRadius:"5px",
              border:"1px solid gray"
            }}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"20px",
              borderRadius:"5px",
              border:"1px solid gray"
            }}
          />

          <button
            type="submit"
            style={{
              width:"100%",
              padding:"12px",
              backgroundColor:"#007BFF",
              color:"white",
              border:"none",
              borderRadius:"5px",
              fontSize:"16px",
              cursor:"pointer"
            }}
          >
            Se connecter
          </button>

        </form>

        <p style={{marginTop:"20px", fontWeight:"bold"}}>
          {message}
        </p>

      </div>

    </div>

  );
}

export default Login;