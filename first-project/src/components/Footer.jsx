import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Movie App | Made with ❤️ by Guddu</p>
    </footer>
  );
}

export default Footer;
