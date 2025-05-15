import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
        <img src="/images/little_lemon_logo.png" alt="Logo" class="nav-img" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Book a table</Link></li>
        </ul>
      </nav>
    );
  }

  export default Nav;