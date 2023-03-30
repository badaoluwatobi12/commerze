import React, { useState, useEffect } from "react";
import "./Login.scss";
import logo from "./img/logo.png";

function Login() {
  // This variable determines whether password is shown or not
  const [IsShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((IsShown) => !IsShown);
  };

  return (
    <>
      <div className="container">
        <header className="header1">
          <h1 className="header1__headText1">
            search
            <i className="fa-solid fa-magnifying-glass"></i>
          </h1>
          <h1 className="header1__headText2">Group | Deutsch</h1>
        </header>
        <header className="header2">
          <img src={logo} alt="" className="header2__logo" />
          <h1 className="header2__headText3">Private & Business Clients</h1>
        </header>
        <header className="header3">
          <h1 className="header3__headText4">My online banking</h1>
          <h1 className="header3__headText5">Products & Offers</h1>
        </header>
        <section className="main">
          <h1 className="main__headText6">Login Private & Business Clients</h1>
          <div className="main__box">
            <div className="main__box--card1">
              {/* ///////////// */}

              <form
                action="#"
                className="main__box--card1__popform "
                onSubmit={(e) => e.preventDefault()}
              >
                {/* username */}
                <div className="main__box--card1__popform__group">
                  <input
                    type="text"
                    name="email"
                    className="main__box--card1__popform__input--1"
                    placeholder="Email"
                    required
                  />
                  <i className="fa-sharp fa-solid fa-circle-info main__box--card1__popform__icon"></i>
                </div>
                {/* password */}
                <div className="main__box--card1__popform__group">
                  <input
                    name="password"
                    type={IsShown ? "text" : "password"}
                    placeholder="Password"
                    className="main__box--card1__popform__input--1"
                    required
                  />
                  <i className="fa-sharp fa-solid fa-circle-info main__box--card1__popform__icon"></i>
                </div>

                <div className="main__box--card1__popform__group">
                  <label htmlFor="checkbox">Show password?</label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={IsShown}
                    onChange={togglePassword}
                  />
                </div>

                <div className="main__box--card1__popform__group">
                  <a href="/account" className="button1">
                    <i className="fa-solid fa-lock "></i>
                    Login Now
                  </a>
                </div>
              </form>
            </div>
            <div className="main__box--card2">
              <h1 className="main__box--card2__headText7">
                Security Information
              </h1>

              <ul className="main__box--card2__headText8">
                <li>Register for Internet banking</li>
                <li>Forgotten your subscripton number?</li>
                <li>
                  Our security guides give you information and advice on safe
                  online banking
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="footer">
          <a href className="footer__headText6">
            AGB
          </a>
          <a href className="footer__headText6">
            Imprint
          </a>
          <a href className="footer__headText6">
            Legal Notices
          </a>
          <a href className="footer__headText6">
            Consent-Options
          </a>
          <a href className="footer__headText6">
            Data Protection
          </a>
        </footer>
      </div>
    </>
  );
}

export default Login;
