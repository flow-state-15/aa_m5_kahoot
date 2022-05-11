import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Library from './components/Library';
import CreateQuiz from './components/CreateQuiz';
import Counter from './components/features/counter';

import './App.css';

function App() {
  return (
    <>
      <h1>APP ROOT</h1>
      <BrowserRouter>
        <Navigation />
        <Course />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
