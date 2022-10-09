import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from '../pages/Login';
import Header from './Header';
import Hero from '../pages/Hero';
import UserProfile from '../pages/UserProfile';


function App() {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <BrowserRouter>
      <div className="overallTop">
        <Header setUser={setUser} user={user}/>
        <main>
          <Routes>
            <Route exact='true' path='/' element={<Hero />}/>
            <Route path='/user-profiles/:id' element={<UserProfile user={user}/>}/>
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
