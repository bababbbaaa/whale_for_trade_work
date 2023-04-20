import React, { useState } from "react";
import photo from "../../../../../image/blank-profile-picture-gc8e2267bd_1280.png";
import axios from "axios";
import env from "../../../../../environments/enviroments";
const UsersF = (props) => {
  const [order, setOrder] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const deleteUser = async (id) => {
    console.log(id);
    try {
      await axios
        .delete(`${env.url}/users/${id}`)
        .then(() => console.log("done delete"))
        .then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };
  const getOrders = async (id) => {
    console.log(id);
    try {
      await axios
        .get(`${env.url}/order/user/${id}`)
        .then((res) => setOrder(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const getTransaction = async (id) => {
    console.log(id);
    try {
      await axios
        .get(`${env.url}/transaction/${id}`)
        .then((res) => setTransaction(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const [input, setInput] = useState({
    statusAccess: "",
  });
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const editBundle = async (id, username, email, number) => {
    try {
      await axios
        .patch(`${env.url}/users/${id}`, {
          id: id,
          username: username,
          email: email,
          number: number,
          statusaccess: input.statusAccess,
        })
        .then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(input);

  return (
    <>
      {props.dataUser.map((u: any): any => (
        <>
          <div
            className="container-user"
            data-bs-toggle="modal"
            data-bs-target={`#staticBackdrop${u.id}`}
          >
            <div className="photo">
              <img
                className="img"
                src={photo}
                onClick={() => {
                  getOrders(u.id);
                  getTransaction(u.id);
                }}
              />
            </div>

            <div className="email">
              <span className="title-u">email: </span>
              <span className="get">{u.email}</span>
            </div>
            <div className="number">
              <span className="title-u">number: </span>
              <span className="get">{u.number}</span>
            </div>
            <div className="balance">
              <span className="title-u">balance: </span>
              <span className="get">{`${u.balance}$`}</span>
            </div>
          </div>
          {/*edit*/}

          {/* pop up */}
          <div
            className="modal fade"
            id={`staticBackdrop${u.id}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
                  <div className="info">
                    <h2 className="title-info">info</h2>
                    <div className="email">
                      <span className="title-u">email: </span>
                      <span className="get">{u.email}</span>
                    </div>
                    <div className="number">
                      <span className="title-u">number: </span>
                      <span className="get">{u.number}</span>
                    </div>
                    <div className="balance">
                      <span className="title-u">balance: </span>
                      <span className="get">{u.balance}$</span>
                    </div>

                    <div className="idnf">
                      <span className="title-u">idnf: </span>
                      <span className="get">{u.idnf}</span>
                    </div>
                    <div className="idnb">
                      <span className="title-u">idnb: </span>
                      <span className="get">{u.idnb}</span>
                    </div>
                    <div className="statusaccess">
                      <span className="title-u">statusaccess: </span>
                      <span className="get">{u.statusaccess}</span>
                    </div>
                    <div className="tree">
                      <span className="title-u">tree: </span>
                      <span className="get">{u.tree}</span>
                    </div>
                  </div>
                  <div className="bundle">
                    <h2 className="h2">bundle</h2>
                    {order.map((o: any): any => (
                      <div className="con-ti">
                        <div>name: {o.name}</div>
                        <div>price: {o.price}$</div>
                        <div>
                          time buy: {new Date(o.timebuy).toDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="trans">
                    <h2 className="title-info">transaction</h2>
                    {transaction.map((t: any): any => (
                      <div className="con-ti">
                        <div>{t.category}</div>
                        <div>price: {t.price}</div>
                        <div>
                          time buy: {new Date(t.timejoin).toDateString()}
                        </div>
                      </div>
                    ))}
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
                    onClick={() => deleteUser(u.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default UsersF;
