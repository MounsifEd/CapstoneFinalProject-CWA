import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="logo">
          ReactShop
        </Link>

        {/* Simple Navigation */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/deals" className="nav-link">
            Today's Deals
          </NavLink>

          <NavLink to="/giftCards" className="nav-link">
            Gift Cards
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/cart" className="nav-link">
            Cart <span className="cart-count">{itemCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
