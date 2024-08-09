import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    //alert("logged out successfully");
    toast.success("Logged Out Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" />
            Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-Link">
                {" "}
                <FaRegUserCircle />
                Welcome {user?.name}
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
