import React from 'react'
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
