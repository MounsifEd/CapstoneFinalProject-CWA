import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <Link to="https://www.canva.com/design/DAG6rVKYqtQ/377HX50ML7GNtJwfIeVfrA/edit?utm_content=DAG6rVKYqtQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="logo">
          EMD Shop
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
