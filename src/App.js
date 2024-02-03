import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import './App.css';
import Calendar from '../src/components/schedule/Calender'; 
import TeamList from '../src/components/team/TeamList';




function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Calendar /> {/* Displayed on every page, which is unusual */}
        <TeamList /> {/* Displayed on every page, which is unusual */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

