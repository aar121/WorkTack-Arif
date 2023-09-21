import {Link} from 'react-router-dom';
import './styles.css';

function NavBar() {

    return(
        <>
                <nav className="navbar">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/addjobs">Add Job</Link>
                        <Link className="nav-link" to="/morejobs">More Jobs</Link>
        
                </nav>
        </>
    )
}

export default NavBar;