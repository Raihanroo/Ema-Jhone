import './Header.css'
import Logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
          <div>
          <a href="/shop">shop</a>
            <a href="/order">order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
          </div>
        </nav>
    );
};

export default Header;