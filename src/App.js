import React from 'react';
import './App.css';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
