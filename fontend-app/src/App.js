import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="flex flex-row items-center justify-around">
      {!token ? (
        <>
          <Signup  />
          <Login setToken={setToken} />
        </>
      ) : (
        <Profile token={token} />
      )}
    </div>
  );
 
}

export default App;
