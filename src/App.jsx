import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary pt-[60px]">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
