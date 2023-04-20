import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import axios from "axios";
import env from "../../environments/enviroments";
interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = { bgDark: "", showBox: false };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let bgDark = "bg-body-tertiary";
      if (window.scrollY > 10) {
        bgDark = "bg-light";
      }
      this.setState({ bgDark });
    });
  }
  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  render() {
    const handleLogoutClick = () => {
      axios
        .post(`${env.url}/users/logout`)
        .then(() => console.log("done"))
        .then(() => localStorage.clear())
        .then(() =>
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        );
    };

    return (
      <nav className={`navbar navbar-expand-md ${this.state.bgDark} h-70`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Whale4Trade
          </NavLink>
          <button
            className={`navbar-toggler animate__animated ${
              this.state.showBox ? " animate__shakeX" : ""
            } `}
            onMouseOver={this.handleBoxToggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faListUl} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2 nav-pills ">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                {localStorage.length === 0 ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      <span className="logout ">LogIn</span>
                    </NavLink>
                  </li>
                ) : localStorage.user === "null" ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      <span className="logout ">LogIn</span>
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav-item" onClick={handleLogoutClick}>
                      <NavLink
                        className="nav-link"
                        onClick={handleLogoutClick}
                        to="/login"
                      >
                        <FontAwesomeIcon
                          onClick={handleLogoutClick}
                          icon={faRightToBracket}
                        />
                        <span className="logout ">Logout</span>
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
