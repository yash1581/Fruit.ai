import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Faq from './Components/Faq/Faq';
import GoogleTranslate from './Components/GoogleTranslate/GoogleTranslate.jsx';
import Chat from './Components/Chat/Chat.jsx'

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route path="/" element={<Login />} />
        {/* Route for Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/GoogleTranslate" element={<GoogleTranslate />} />
        <Route path="/Chat" element={<Chat />} />


      </Routes>
    </Router>
  );
}

export default App;
