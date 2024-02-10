// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
          {/* Add more links for additional routes */}
        </ul>
      </nav>
    </footer>
  );
}