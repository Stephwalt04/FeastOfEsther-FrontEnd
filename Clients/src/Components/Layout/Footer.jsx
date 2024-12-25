// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="light">
        <div className="col-md-12">
          <div className="linked">
            <h6 className="d-inline">Follow Us: </h6>
            <a href="https://www.instagram.com/feast_of_esther_na">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@feastofestherna">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://www.facebook.com/groups/feastofestherna/">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.youtube.com/@feastofesther5437">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <p className="text-center lil">
              {" "}
              <i>Copyright 2024&copy;FeastOfEstherNA.</i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
