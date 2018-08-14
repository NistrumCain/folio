import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h2>Header</h2>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/history">History</Link></li>
    </ul>
  </header>
)


export default Header;
