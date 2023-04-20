import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import env from "../../environments/enviroments";
// hany@gmial.c
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")!)
  );
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${env.url}/users/auth`, input, {
          withCredentials: true,
        })
        .then((res) => setCurrentUser(res.data.data))
        .then(() => setIsActive((current) => !current))
        .then(() =>
          setTimeout(() => {
            navigate("/");
          }, 2000)
        )
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    } catch (err: any) {
      setErr(err.response.data.message);
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <>
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
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Welcome Back Whale....</div>
        </div>
      </div>
      <div className="back"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST">
          <div className="user-box">
            <input type="email" name="email" required onChange={handelChange} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              onChange={handelChange}
            />
            <label>Password</label>
          </div>
          <div className="active">{err && err}</div>
          {/* <input value="Login" type="submit" className="btn btn-primary" /> */}

          <Link to="#" onClick={(e) => handleClick(e)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
          <div className="reg">Don't you have an account?</div>
          <Link to="/">reset password</Link>

          <Link to="/register">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            register
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
// user
