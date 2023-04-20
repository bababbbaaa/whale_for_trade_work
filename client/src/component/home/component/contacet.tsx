import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faDiscord,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faComment,
  faCommentSms,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Contact = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className="contact">
        <FontAwesomeIcon
          className={`star ${isActive ? "active" : ""}`}
          onClick={handleClick}
          icon={faCommentSms}
        />
        <div className="icon">
          <NavLink to="">
            <span className="co">Chat</span>
            <FontAwesomeIcon icon={faComment} />
          </NavLink>
          <NavLink to="https://t.me/Whale4trade">
            <span className="co">Telegram</span>
            <FontAwesomeIcon icon={faTelegram} />
          </NavLink>
          {/* <NavLink to="/">
            <span className="co">Instagram</span>
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink> */}
          {/* <NavLink to="/">
            <span className="co">Discord</span>
            <FontAwesomeIcon icon={faDiscord} />
          </NavLink> */}
          {/* <NavLink to="/">
            <span className="co">Whatsapp</span>
            <FontAwesomeIcon icon={faWhatsapp} />
          </NavLink> */}
          {/* <NavLink to="/">
            <span className="co">Tiktok</span>
            <FontAwesomeIcon icon={faTiktok} />
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
