import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import env from "../../../../../environments/enviroments";

const Title = (props) => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    idNF: "",
    idNB: "",
    statusAccess: "",
    balance: "",
  });
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(input);

  const handleClick = async (e) => {
    e.preventDefault();
    if (input.username !== "") {
      if (input.email !== "") {
        if (input.password !== "") {
          if (input.number !== "") {
            if (input.idNF !== "") {
              if (input.idNB !== "") {
                try {
                  await axios
                    .post(`${env.url}/users/share`, input)
                    .then((res) => setErr(res.data.message));
                } catch (err: any) {
                  if (err.response.status === 401) {
                    try {
                      await axios
                        .post(`${env.url}/users`, input)
                        .then(() => setIsActive((current) => !current))
                        .then(() => window.location.reload());
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
          <div className="toast-body">Welcome with Whale4trade.... created</div>
        </div>
      </div>
      <div className="title">
        <span>Users: {props.dataUser.length}</span>
        <FontAwesomeIcon
          icon={faPlus}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
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
                  onChange={handelChange}
                  type="text"
                  name="username"
                  placeholder="username"
                />
                <input
                  onChange={handelChange}
                  type="email"
                  name="email"
                  placeholder="email"
                />
                <input
                  onChange={handelChange}
                  type="number"
                  name="number"
                  placeholder="number"
                />
                <input
                  onChange={handelChange}
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <input
                  onChange={handelChange}
                  type="file"
                  name="idNF"
                  placeholder=""
                />
                <input
                  onChange={handelChange}
                  type="file"
                  name="idNB"
                  placeholder=""
                />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="statusAccess"
                  onChange={handelChange}
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
                {err}
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
                  onClick={handleClick}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
