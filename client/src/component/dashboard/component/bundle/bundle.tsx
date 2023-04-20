import React, { useEffect, useState } from "react";
import axios from "axios";
import BundleF from "./component/title";
import env from "../../../../environments/enviroments";

const Bundle = (props) => {
  const [bundleDash, setBundleDash] = useState([]);

  const getBundleDash = async () => {
    try {
      await axios
        .get(`${env.url}/bundle`)
        .then((res: any) => setBundleDash(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bundleDash);
  const deleteBundle = async (id) => {
    console.log(id);

    try {
      await axios
        .delete(`${env.url}/bundle/${id}`)
        .then(() => console.log("done delete"))
        .then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBundleDash();
  }, []);
  const [input, setInput] = useState({
    win: "",
    price: "",
    category: "",
  });
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const editBundle = async (id, name) => {
    try {
      await axios
        .patch(`${env.url}/bundle/${id}`, {
          id: id,
          name: name,
          price: input.price,
          win: input.win,
          imgbundle: "",
          category: input.category,
        })
        .then(() => window.location.reload());
    } catch (error) {}
  };
  console.log(input);

  return (
    <>
      <div className="container c-bundle">
        <BundleF bundleDash={bundleDash} />
        <div className="bundle">
          {bundleDash.map((b: any) => (
            <>
              <div className="con-bundle" key={b.id}>
                <img src={b.imgbundle} alt="" className="rounded" />
                <div className="info">
                  <div className="name">
                    <span className="s">name:</span>
                    <span className="ti">{b.name}</span>
                  </div>
                  <div className="date">
                    <span className="s">date create:</span>
                    <span className="ti">
                      {new Date(b.timecreated).toDateString()}
                    </span>
                  </div>
                  <div className="price">
                    <span className="s">new price:</span>
                    <span className="ti">{b.price}$</span>
                  </div>
                  <div className="det d-inline-block text-truncate">
                    <span className="s">new win:</span>
                    <span className="ti">{b.win}$</span>
                  </div>
                </div>
                <div className="user-count">
                  <span className="s">category:</span>
                  <span className="ti">{b.category}</span>
                </div>
                <input
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalDeleteBundle"
                  value="Delete"
                />
                <div
                  className="modal fade"
                  id="exampleModalDeleteBundle"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          whale
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        are you sure to delete this bundle:{b.name}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteBundle(b.id)}
                        >
                          yes, Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal${b.id}`}
                  value="Edit"
                />
              </div>
              <div
                className="modal fade"
                id={`exampleModal${b.id}`}
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
                      <div>
                        <label htmlFor="category">category: </label>
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
                      </div>
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
                        onClick={() => editBundle(b.id, b.name)}
                        className="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bundle;
