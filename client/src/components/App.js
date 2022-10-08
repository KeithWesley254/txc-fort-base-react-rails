import { useEffect, useState } from 'react';
import '../App.css';
import Login from '../pages/Login';

function App() {

  const [user, setUser] = useState(null);
  const [loginSlides, setLoginSlides] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/login_page_slides")
    .then(r => r.json())
    .then(data => setLoginSlides(data))
  }, []);

  console.log(loginSlides)

  if (!user) return <Login onLogin={setUser} onShowCase={setLoginSlides}/>;

  return (
    <div className="App">
      <h3>TXC FortBase</h3>
    </div>
  );
}

export default App;
