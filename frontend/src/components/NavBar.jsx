import {Link} from 'react-router-dom';

 
function NavBar() {

    return(
        <>
        <div>
             <h1>WorkTack</h1>
        </div>
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