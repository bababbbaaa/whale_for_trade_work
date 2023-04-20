import axios from "axios";
import env from "../../../environments/enviroments";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../../image/blank-profile-picture-gc8e2267bd_1280.png";
// import img2 from "../../../../../api/images/1681819307935.png";
import Win from "./win";

const UserProfile = () => {
  const [isActive, setIsActive] = useState(false);
  const [dataUser, setDataUser] = useState({
    username: "ll",
    email: "dd",
    number: "2",
    balance: "0",
    imgprofile: "w",
    statusaccess: "d",
  });
  const [err, setErr] = useState("");
  const [errUser, setErrUser] = useState<any>("");
  const [errOrder, setErrOrder] = useState<any>("");
  const navigate = useNavigate();

  const handelChange = (e) => {
    setDataUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(
          `${env.url}/users/${JSON.parse(localStorage.user).id}`,
          dataUser,
          {
            withCredentials: true,
          }
        )
        .then((res) =>
          localStorage.setItem("user", JSON.stringify(res.data.data))
        )
        .then(() => setIsActive((current) => !current))
        .then(() =>
          setTimeout(() => {
            setIsActive((current) => !current);
          }, 3000)
        )
        .then(() => window.location.reload());
    } catch (err: any) {
      setErr(err.response.data.message);
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };

  useEffect(() => {
    try {
      axios
        .get(`${env.url}/users/${JSON.parse(localStorage.user).id}`)
        .then((res: any) => setDataUser(res.data.data));
    } catch (error) {
      setErrUser("please login");
      setTimeout(() => {
        setErr("");
        navigate("login");
      }, 1000);
    }
  }, []);

  const [dataBundle, setDataBundle] = useState<any[]>([]);
  useEffect(() => {
    try {
      axios
        .get(`${env.url}/order/user/${JSON.parse(localStorage.user).id}`)
        .then((res: any) => setDataBundle(res.data.data));
    } catch (error) {
      setErrOrder("error : not complete");
      setTimeout(() => {
        setErrOrder("");
      }, 1000);
    }
  }, [setDataBundle]);

  const [dataTree, setDataTree] = useState([]);
  const [errTree, setErrTree] = useState<any>([]);
  const handleClick = async () => {
    try {
      await axios
        .get(`${env.url}/tree/${JSON.parse(localStorage.user).id}`)
        .then((res) => setDataTree(res.data.data));
    } catch (err: any) {
      setErrTree("error : not complete");
      setTimeout(() => {
        setErrTree("");
      }, 1000);
    }
  };
  useEffect(() => {
    handleClick();
  }, []);

  const [Tree, setTree] = useState([]);
  const handleTree = async () => {
    try {
      await axios
        .get(`${env.url}/tree/${JSON.parse(localStorage.user).id}`)
        .then((res) => setTree(res.data.data));
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleTree();
  }, []);
  console.log(dataUser);

  return (
    <div className="user">
      <div className="photo">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <span className="name">
          <span>
            <span className="title">username:</span>
            <span className="test">{`${dataUser!.username}`}</span>
          </span>
        </span>
        <span className="win">
          <span>
            <span className="title">win:</span>
            <span className="test">
              <Win />
            </span>
          </span>
        </span>
        <span className="email">
          <span>
            <span className="title">email:</span>
            <span className="test">{`${dataUser!.email}`}</span>
          </span>
        </span>
        <span className="number">
          <span>
            <span className="title">number:</span>
            <span className="test">{`${dataUser!.number}`}</span>
          </span>
        </span>
        <span className="balance">
          <span>
            <span className="title">balance: </span>
            <span className="test">{`${dataUser!.balance}$`}</span>
          </span>
        </span>
        <div className="button">
          {dataUser.statusaccess === "admin" ? (
            <span className="access">
              <NavLink to="/dashboard">
                <input
                  className="btn btn-primary"
                  type="button"
                  value="dash board"
                />
              </NavLink>
            </span>
          ) : (
            ""
          )}
          <span className="edit-icon">
            <input
              type="button"
              className="btn btn-primary"
              value="update"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            />
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div
                id="liveToast"
                className={`toast fade ${isActive ? "show" : "hide"} `}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Whale4trade</strong>
                  <small>Just Now</small>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">update your profile</div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      update your email
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="email"
                      onChange={handelChange}
                      name="email"
                      placeholder="your new email"
                    />
                    <input
                      type="username"
                      onChange={handelChange}
                      name="username"
                      placeholder="your new username"
                    />
                    <input
                      type="number"
                      onChange={handelChange}
                      name="number"
                      placeholder="your new number"
                    />
                    <input
                      type="file"
                      onChange={handelChange}
                      name="imgprofile"
                      placeholder="your new number"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={handleUpdate}
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <NavLink to="/addBalance">
            <span className="btn btn-primary">Add Balance</span>
          </NavLink>
        </div>
        {err && err}
      </div>
      <div className="count">
        <div className="tree">
          <span className="title">
            {Tree.length === 0 ? `not found affiliate` : `your affiliate: `}
          </span>
          <span>{Tree.length}</span>
        </div>
        <div className="line"></div>
        <div className="bundle">
          <span className="title">
            {dataBundle.length === 0
              ? `you aren't subscription to any bundle`
              : `your bundle: `}
          </span>
          <span>{dataBundle.length === 0 ? "" : dataBundle.length}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
