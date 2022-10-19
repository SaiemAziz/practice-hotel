import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Layouts/Auth";

const Header = () => {
    let {user, setUser, logOut} = useContext(AuthContext)

    let logOutClicked = () => {
        logOut()
        .then(()=> setUser(null))
        .catch((err) => console.error(err))
    }


  return (
    <div className="navbar bg-base-300 shadow-xl shadow-black sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
          >
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Practice</Link>
        { user && <p>{user.email}</p> }
      </div>
      <div className="navbar-end">
        {
            !user ?
            <Link to='/login' className="btn btn-primary">Log In</Link> :
            <Link to='/' className="btn btn-primary"
                onClick={logOutClicked}
            >Log Out</Link>
        }
      </div>
    </div>
  );
};

export default Header;
