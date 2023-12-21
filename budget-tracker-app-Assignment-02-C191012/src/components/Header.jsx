import React from 'react';
import Budget from './Budget';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-violet-400 to-violet-600">
      <Navbar />
      <Budget />
    </div>
  )
}

export default Header;