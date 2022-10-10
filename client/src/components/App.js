import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Login from '../pages/Login';
import Header from './Header';
import Hero from '../pages/Hero';
import UserProfile from '../pages/UserProfile';
import Technologies from '../pages/Technologies';
import AboutUs from '../pages/AboutUs';
import Soldiers from '../pages/Soldiers';
import Stories from '../pages/Stories';
import Memorial from '../pages/Memorial';


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
            <Route path='/user-profiles/:id' element={<UserProfile setUser={setUser} user={user}/>}/>
            <Route path='/soldiers' element={<Soldiers />}/>
            <Route path='/stories' element={<Stories />}/>
            <Route path='/technologies' element={<Technologies />}/>
            <Route path='/memorial' element={<Memorial />}/>
            <Route path='/about-us' element={<AboutUs />}/>      
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
