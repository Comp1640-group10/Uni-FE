import Navbar from './Navbar/Navbar';
import "./NavbarStaff.scss";

function NavbarStaff({ children }) {
    return (
        <div className="navbar-content">
            <Navbar />
            <div className="content">{children}</div>
        </div>
    )
}

export default NavbarStaff