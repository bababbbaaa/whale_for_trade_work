import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState, useEffect } from "react";
import axios from "axios";
import env from "../../environments/enviroments";

const RegisterAff = () => {
  //handle error
  const [errTree, setErrTree] = useState("");
  const [input, setInput] = useState({
    balance: "",
    email: "",
    fileIdBack: "",
    fileIdFront: "",
    imgProfile: "",
    number: "",
    statusAccess: "",
    username: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("aff")!)
  );

  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (input.username !== "") {
      if (input.email !== "") {
        if (input.password !== "") {
          if (input.number !== "") {
            if (input.fileIdFront !== "") {
              if (input.fileIdBack !== "") {
                try {
                  await axios
                    .post(`${env.url}/users/share`, input)
                    .then((res) => setErr(res.data.message));
                } catch (err: any) {
                  if (err.response.status === 401) {
                    try {
                      await axios
                        .post(`${env.url}/users`, input)
                        .then(() =>
                          setCurrentUser(window.location.href.slice(-36))
                        )
                        .then(async () => {
                          try {
                            await axios.post(`${env.url}/tree`, {
                              userId: window.location.href.slice(-36),
                              iamEmail: input.email,
                              timeJoin: new Date(),
                            });
                          } catch (error) {
                            setErrTree("error : not complete");
                            setTimeout(() => {
                              setErrTree("");
                            }, 3000);
                          }
                        })
                        .then(() => setIsActive((acc) => !acc))
                        .then(() =>
                          setTimeout(() => {
                            navigate("/login");
                          }, 3000)
                        );
                    } catch (err: any) {
                      setErr(err.response.data);
                      setTimeout(() => {
                        setErr("");
                      }, 3000);
                    }
                  }
                }
              } else {
                setErr(`please check id back`);
                setTimeout(() => {
                  setErr("");
                }, 3000);
              }
            } else {
              setErr("please check Id front");
              setTimeout(() => {
                setErr("");
              }, 3000);
            }
          } else {
            setErr("please check number");
            setTimeout(() => {
              setErr("");
            }, 3000);
          }
        } else {
          setErr("please check password");
          setTimeout(() => {
            setErr("");
          }, 3000);
        }
      } else {
        setErr("please check username");
        setTimeout(() => {
          setErr("");
        }, 3000);
      }
    } else {
      setErr("please check email");
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  };
  useEffect(() => {
    localStorage.setItem("aff", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <div className="register">
      <div className="card">
        <div className="right">
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
              <div className="toast-body">
                Welcome with Whale4trade.... signed
              </div>
            </div>
          </div>

          <form className="was-validated">
            {/* email */}
            <div className="form-floating mb-3">
              <input
                name="email"
                onChange={handelChange}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />{" "}
              <div className="invalid-feedback">Please enter a Email.</div>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {/* username */}
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <div className="form-floating">
                <input
                  name="username"
                  onChange={handelChange}
                  type="text"
                  className="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                />
                <div className="invalid-feedback">Please enter a Username.</div>
                <label htmlFor="floatingInputGroup1">Your Username</label>
              </div>
            </div>
            {/* password */}
            <div className="form-floating">
              <input
                name="password"
                onChange={handelChange}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <div className="invalid-feedback">Please enter a Password.</div>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {/* number */}
            <div className="form-floating">
              <input
                name="number"
                onChange={handelChange}
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Your Number"
              />
              <div className="invalid-feedback">Please enter a Number.</div>
              <label htmlFor="floatingNumber">Your Number</label>
            </div>
            {/* files */}
            <div className="mb-3">
              <input
                name="fileIdFront"
                onChange={handelChange}
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
              <div className="invalid-feedback">Example invalid ID front</div>
            </div>
            <div className="mb-3">
              <input
                name="fileIdBack"
                onChange={handelChange}
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
              <div className="invalid-feedback">Example invalid ID back</div>
            </div>

            <div className="active">{err && err}</div>
            <div className="active">{errTree && errTree}</div>
            <div className="mb-3">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleClick}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAff;
