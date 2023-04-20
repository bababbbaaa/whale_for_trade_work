import React, { useState, useEffect } from "react";
// import photo from "../../image/blank-profile-picture-gc8e2267bd_1280.png";
import axios from "axios";
import Title from "./component/title";
import UsersF from "./component/users";
import env from "../../../../environments/enviroments";
const Users = (props) => {
  // get all users
  const [dataUser, setDataUser] = useState([]);
  const userDash = async () => {
    try {
      await axios
        .get(`${env.url}/users/`)
        .then((res: any) => setDataUser(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userDash();
  }, []);

  return (
    <>
      <div className="users container">
        <Title dataUser={dataUser} />
        <div className="con-users">
          <UsersF dataUser={dataUser} />
        </div>
      </div>
    </>
  );
};
export default Users;
