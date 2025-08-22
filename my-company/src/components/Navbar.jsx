import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return 
      <div>
        <nav style={('backgroundColor: blue, padding: 16px')}>
            <ul style={('display: "flex", justifyContent:space-between, listStyle: none, gap: 16px, margin: 0, padding: 0 ')} >
                <li><Link to ="/" style={('color:white, textDecoration: None')}>Home</Link> </li>
                <li><Link to="/about" style={('color:white, textDecorator: None')}>About</Link></li>
                <li><Link to ="/contact" style={('color:white, textDecoration: None')}>Contact</Link> </li>
                <li><Link to="/services" style={('color:white, textDecorator: None')}>Services</Link></li>
            </ul>

        </nav>
      </div>;
}

export default Navbar;