import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div>
      <h2>Footer</h2>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/history">History</Link></li>
    </ul>
  </footer>
)


export default Footer;
