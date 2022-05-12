import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Library from './components/Library';
import CreateQuiz from './components/Quiz/CreateQuiz';
import Counter from './components/features/counter';
import './App.css';

import SingleKahootPage from './components/Kahoots/SingleKahootPage';

import Sidebar from './components/Sidebar';




function App() {
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        {showNav && <Navigation />}
      {showNav && <Navigation toggle={() => setIsOpen(!isOpen)}/>}
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        {/* <Course /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/createquiz" element={<CreateQuiz showNav={showNav} setShowNav={setShowNav}/>} />
          <Route path="/kahoots/:kahootId" element={<SingleKahootPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
