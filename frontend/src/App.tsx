import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Library from './components/Library';
import CreateQuiz from './components/CreateQuiz';
import Counter from './components/features/counter';
import SideNavBar from './components/SideNavbar/SideNavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import './App.css';

function App() {
  return (
    <>
      <Auth0Provider
      domain="dev-l4rxqvn7.us.auth0.com"
      clientId="8S7nJ7izTPC4HbPP6uXAYQSehpZJQu6L"
      redirectUri={window.location.origin}
      >
        <h1>APP ROOT</h1>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/library/*" element={<Library />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/createquiz" element={<CreateQuiz />} />
            <Route path="/sidenavbar" element={<SideNavBar />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>,
    </>
  );
}

export default App;
