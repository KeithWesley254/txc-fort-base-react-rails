import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
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
import Footer from './Footer';
import SpecificSoldier from '../pages/SpecificSoldier';
import SpecificGeneral from '../pages/SpecificGeneral';
import { LinearProgress } from '@mui/material';


function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setIsLoading(false)
        });
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />
  if(isLoading === true) return <LinearProgress style={{backgroundColor: "#4e60ff"}} />

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
            <Route path='/stories' element={<Stories user={user}/>}/>
            <Route path='/technologies' element={<Technologies />}/>
            <Route path='/memorial' element={<Memorial />}/>
            <Route path='/about-us' element={<AboutUs />}/> 
            <Route path='/soldiers/:id' element={<SpecificSoldier />}/>
            <Route path='/generals/:id' element={<SpecificGeneral />}/>  
          </Routes>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
