import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <span className="logo">Bookings.com</span>
            <div className="navItems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar;