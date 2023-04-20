/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import env from "../../environments/enviroments";
import "./order.style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Order = (props) => {
  const navigate = useNavigate();
  const checkUser = () => {
    if (JSON.parse(localStorage.user) === null) {
      window.location.pathname = "/login";
    }
  };
  // useEffect(() => {
  checkUser();
  // }, []);
  const [dataBundle, setDataBundle] = useState<any>([]);
  const handleBundle = async () => {
    try {
      await axios
        .get(`${env.url}/bundle/${window.location.search.slice(1)}`)
        .then((res) => setDataBundle(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    handleBundle();
  }, []);
  const [users, setUser] = useState<any>([]);
  const handleUser = async () => {
    try {
      await axios
        .get(`${env.url}/users/${JSON.parse(localStorage.user).id}`)
        .then((res) => setUser(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    handleUser();
  }, []);
  const dataCreate = {
    userId: JSON.parse(localStorage.user).id,
    bundleId: window.location.search.slice(1),
    price: dataBundle.win,
    timeBuy: new Date(),
    win: dataBundle.price,
    name: dataBundle.name,
  };

  const handleOrder = async () => {
    try {
      if (Number(users.balance) >= Number(dataBundle.price)) {
        try {
          await axios.post(`${env.url}/order`, dataCreate).then(async () => {
            try {
              await axios
                .patch(
                  `${env.url}/users/balance/${
                    JSON.parse(localStorage.user).id
                  }`,
                  {
                    id: JSON.parse(localStorage.user).id,
                    balance: Number(users.balance) - Number(dataBundle.price),
                  }
                )
                .then(async () => {
                  try {
                    await axios
                      .get(
                        `${env.url}/users/${JSON.parse(localStorage.user).id}`
                      )
                      .then((res) =>
                        localStorage.setItem(
                          "user",
                          JSON.stringify(res.data.data)
                        )
                      );
                  } catch (error) {}
                })
                .then(async () => {
                  try {
                    await axios.patch(`${env.url}/tree/bundle/${users.email}`, {
                      bundle: `${dataBundle.name}`,
                      iamemail: `${users.email}`,
                    });
                  } catch (error) {}
                })

                .then(async () => {
                  try {
                    await axios
                      .post(`${env.url}/transaction/`, {
                        userId: JSON.parse(localStorage.user).id,
                        category: `subscribe to bundle ${dataBundle.name}`,
                        price: `${dataBundle.price}`,
                        timeJoin: new Date(),
                      })
                      .then(() => navigate("/profile"));
                  } catch (error) {}
                });
            } catch (error) {}
          });
        } catch (error) {}
      } else {
        navigate("/addBalance");
      }
    } catch (error) {}
  };

  return (
    <div className="container-order">
      <div>
        <img className="img " src={dataBundle.imgbundle} />
        <div className="con">
          <div className="price">
            <span className="title">price: </span>
            <span className="co">{`${dataBundle.price}$`}</span>
          </div>
          <div className="win">
            <span className="title">win: </span>
            <span className="co">{`${dataBundle.win}$`}</span>
          </div>
          <div className="name">
            <span className="title">name: </span>
            <span className="co">{dataBundle.name}</span>
          </div>
          <div className="category">
            <span className="title">category: </span>
            <span className="co">{dataBundle.category}</span>
          </div>
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value="order"
          onClick={handleOrder}
        />
      </div>
    </div>
  );
};

export default Order;
