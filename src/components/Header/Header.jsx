import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import Bars from "../../assets/bars.png";
import { useState } from 'react';
import {Link} from "react-scroll";

export default function Header() {
  const mobile  = window.innerWidth <= 768? true: false;
  const [menuOpened, setMenueOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      {!menuOpened && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.566rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenueOpened(true);
          }}
        >
          <img
            style={{ height: "1.4rem", width: "1.5rem" }}
            src={Bars}
            alt=""
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              spy
              smooth
              activeClass='active'
              onClick={() => setMenueOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy
              smooth
              onClick={() => setMenueOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenueOpened(false)}>
            <Link
              to="join-us"
              spy
              smooth
              join-us
              onClick={() => setMenueOpened(false)}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenueOpened(false)}>
            <Link to="plans" spy smooth onClick={() => setMenueOpened(false)}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy
              smooth
              onClick={() => setMenueOpened(false)}
            >
              Testiomonilas
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
