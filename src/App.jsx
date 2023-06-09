import { useState } from 'react'
import './App.css'

// Header
function Header() {
  return (
    <header className="header">
      <a className="navHome" href="#">
        Home
      </a>
      <a className="navLink1" href="#">
        Link1
      </a>
      <a className="navLink2" href="#">
        Link2
      </a>
      <a className="navLink3" href="#">
        Link3
      </a>
      <a className="navLink4" href="#">
        Link4
      </a>
      <h1 className="h1StartPage">START PAGE</h1>
      <p className="pTemplateBy">Template by me</p>
      <button className="buttonGetStarted">Get Started</button>
    </header>
  );
}
  
// Section
function Section() {
  return (
    <body className="section">
      <p>menu</p>
    </body>
  )
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}