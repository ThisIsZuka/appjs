import React, { useState } from "react";
// import { useIntl } from 'react-intl';
import { FaHeart, FaBars } from "react-icons/fa";

import {
  BrowserRouter,
  Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const textloop = () => {
  let content = [];
  for (let i = 0; i < 999; i++) {
    content.push(<tr> {i} </tr>);
  }
  return content;
};

const Main = ({ handleToggleSidebar }) => {
  // alert(valueRoute);

  // const intl = useIntl();
  return (
    <main>
      <div
        style={{ position: "absolute" }}
        className="btn-toggle"
        onClick={() => handleToggleSidebar(true)}
      >
        <FaBars />
      </div>
      <header>
        <h1></h1>
        <p>description</p>
        <div className="social-bagdes">test</div>
      </header>

      <div className="block ">
        {/* <table>
        {textloop()}
        </table>
        
        <span> {'image'}</span> */}

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()} made with{" "}
          <FaHeart style={{ color: "red" }} /> by -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://azouaoui.netlify.com"
          >
            Mohamed Azouaoui
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
            />
          </a>
          <a
            href="https://twitter.com/azouaoui_med"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
