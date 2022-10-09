import { useEffect, useState } from 'react';
import '../App.css';
import Login from '../pages/Login';

function App() {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      
    </>
  );
}

export default App;
