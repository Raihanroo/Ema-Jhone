import './Header.css'
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
          <div>
            <Link to="/">shop</Link>
            <Link to="/orders">order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
    );
};

export default Header;