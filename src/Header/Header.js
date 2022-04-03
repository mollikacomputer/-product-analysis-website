import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <NavLink
          className={({ isActive}) => (isActive ? "active-link" : "nav-link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) => (isActive ? "active-link" : "nav-link")}
          to="/review"
        >
          Review
        </NavLink>
        <NavLink
          className={({ isActive}) => (isActive ? "active-link" : "nav-link")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive}) => (isActive ? "active-link" : "nav-link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive}) => (isActive ? "active-link" : "nav-link")}
          to="/aboutus"
        >
          About Us
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Header;
