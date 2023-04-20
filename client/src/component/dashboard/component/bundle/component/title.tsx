import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../../../../../environments/enviroments";
const BundleF = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [err, setErr] = useState("");

  const [input, setInput] = useState({
    name: "",
    price: "",
    win: "",
    ImgBundle: "",
    category: "",
    timeCreated: new Date(),
  });
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(input);
  const createBundle = async () => {
    try {
      await axios
        .post(`${env.url}/bundle`, input)
        .then(() => setIsActive((current) => !current))
        .then(() => console.log("done"))
        .then(() => window.location.reload());
    } catch (err: any) {
      setErr(err.response.data);
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
        <span>Bundle: {props.bundleDash.length}</span>
        <FontAwesomeIcon
          icon={faPlus}
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
                  type="text"
                  name="name"
                  onChange={handelChange}
                  placeholder="name"
                />
                <input
                  type="number"
                  name="price"
                  onChange={handelChange}
                  placeholder="price"
                />
                <input
                  type="number"
                  name="win"
                  onChange={handelChange}
                  placeholder="win"
                />
                <input
                  type="file"
                  name="ImgBundle"
                  onChange={handelChange}
                  placeholder="ImgBundle"
                />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="category"
                  onChange={handelChange}
                >
                  <option value="bronze">bronze</option>
                  <option value="silver">silver</option>
                  <option value="gold">gold</option>
                  <option value="platinum">platinum</option>
                  <option value="vip">vip</option>
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
                  onClick={createBundle}
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

export default BundleF;
