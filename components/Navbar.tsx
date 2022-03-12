import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarStyles from "../styles/Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false);

  const navbarClass = `collapse navbar-collapse${
    isOpenedNavbar ? " show" : ""
  }`;

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-light ${navbarStyles.navbar}`}
    >
      <Link href="/">
        <span className="navbar-brand">
          <img className="ms-4 me-3" src="/logo.png" width="60" alt="logo" />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        onClick={() => {
          setIsOpenedNavbar(!isOpenedNavbar);
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={navbarClass} id="navbarNav">
        <ul className={`navbar-nav ${navbarStyles.ul}`}>
          <li className="nav-item nav-link nav-link-tabs">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item nav-link nav-link-tabs">
            <Link href="/chickens">Chickens</Link>
          </li>
          <li className="nav-item nav-link nav-link-tabs">
            <Link href="/login">Login</Link>
          </li>
          <li className="nav-item nav-link nav-link-tabs">
            <Link href="/register">Register</Link>
          </li>
          {/* <li className="nav-item nav-link nav-link-tabs">
              <Link href="/logout">Logout</Link>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
