import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/login';

function App() {

  const [page, setPage] = useState("home");

  if(page === "login"){
    return <Login />;
  }

  return (
    <Home goLogin={() => setPage("login")} />
  );

}

export default App;