import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/ProfileList">Explores</Link>
        <Link to="/MyProfile">My Profile</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
        </nav>
    );
    
}