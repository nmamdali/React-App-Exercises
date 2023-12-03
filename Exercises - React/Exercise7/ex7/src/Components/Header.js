import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='container-fluid'>
            <h4>Student App</h4>
            <nav class="nav bg-warning justify-content-center">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/search" className="nav-item nav-link">Search Student</Link>
                    <Link to="/manage" className="nav-item nav-link">Manage Student</Link>
            </nav >
        </div>
      );
};

export default Header;