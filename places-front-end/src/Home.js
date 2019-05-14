import React from 'react';
import logo from './logo.svg';
import './App.css';

     
function Header() {
  return(
    <header className="Home-header">
      <p>
        Places Page
      </p>
    </header>
  )
}

function Content() {
  return(
    <section className="Content">
      <p>
        Welcome!
      </p>
    </section>
  )
}

function Home() {
  return (
    <div>
    < Header />
    < Content />
    </div>
  );
}

export default Home;
