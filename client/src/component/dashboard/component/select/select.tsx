import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faB, faServer } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Select = () => {
  return (
    <>
      <NavLink className="select-user" to="">
        <FontAwesomeIcon className="select-user " icon={faUsers} />
        <span className="title-s">Users</span>
      </NavLink>
      <NavLink className="select-bundle" to="bundle">
        <FontAwesomeIcon className="select-bundle" icon={faB} />
        <span className="title-s">Bundle</span>
      </NavLink>
      <NavLink className="select-server" to="server">
        <FontAwesomeIcon className="select-server" icon={faServer} />
        <span className="title-s">server</span>
      </NavLink>
    </>
  );
};

export default Select;
