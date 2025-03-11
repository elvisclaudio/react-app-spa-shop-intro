import { Link } from "react-router-dom";


function Navbar(props) {
  // const { theme, user } = useContext(GlobalContext); // Ensure GlobalContext is available
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse ${props.isCollapse ? 'navbar-collapse' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            <Link className={`nav-link ${window.location.pathname === '/features' ? 'active' : ''}`} to="/features">Features</Link>
            <Link className={`nav-link ${window.location.pathname === '/pricing' ? 'active' : ''}`} to="/pricing">Pricing</Link> 
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar