import React from "react";
import "./Header.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HelmetProvider>
      <div className="nav-bar">
        <Helmet>
          <title>Task menager</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lumanosimo&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <h1>Task menager</h1>
        <Link to="/add-task">
          <span>
            {" "}
            <FontAwesomeIcon className="add-icon" icon={faPlus} />
          </span>
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default Header;
