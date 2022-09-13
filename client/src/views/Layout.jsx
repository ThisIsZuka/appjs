import React, { useState  } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Main from "./Main";

import {
  BrowserRouter,
  Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function Layout() {

  const [toggled, setToggled] = useState(false);



  const handleToggleSidebar = (value) => {
    setToggled(value);
  };



  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <BrowserRouter>
        <LeftSidebar
          // toggled={(handleRouter, toggled)}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Main handleToggleSidebar={handleToggleSidebar} />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
