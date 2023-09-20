import {Link} from 'react-router-dom';
import './styles.css';

function NavBar() {

    return(
        <>
                <nav className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/addjobs">Add Job</Link>
                        <Link to="/morejobs">More Jobs</Link>
                        <Link to="/aboutus">About Us</Link>
        
                </nav>
        </>
    )
}

export default NavBar;