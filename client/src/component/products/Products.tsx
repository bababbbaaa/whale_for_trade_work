import React, { useEffect, useState } from "react";
// import filles
import "./style/products.css";
import Bubble from "./component/bubble";
import img from "../../image/photo_2023-03-13_11-36-42.jpg";

import axios from "axios";
import env from "../../environments/enviroments";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("rotate");
  };

  const [data, setData] = useState([]);
  const handleData = async () => {
    try {
      await axios
        .get(`${env.url}/bundle`)
        .then((res: any) => setData(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div className=" products">
        <div className="bronze">
          <h1>bronze</h1>
          <div className="container con-bronze">
            {data.map((p: any): any =>
              p.category === "bronze" ? (
                <div onClick={handleClick} className="container">
                  <div className="con-img">
                    <img src={img} alt="" />
                  </div>

                  <div className="pra">
                    {/* <span className="name">{p.name}</span> */}
                    <span className="price">{`${p.price}$ /`}</span>
                    <span className="win">{`${p.win}$ `}</span>
                    <NavLink to={`order?${p.id}`}>
                      <input
                        className="order btn btn-primary"
                        value="order"
                        type="button"
                      />
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="silver">
          <h1>silver</h1>
          <div className="container con-silver">
            {data.map((p: any): any =>
              p.category === "silver" ? (
                <div onClick={handleClick} className="container">
                  <div className="con-img">
                    <img src={p.imgbundle} alt="" />
                  </div>

                  <div className="pra">
                    {/* <span className="name">{p.name}</span> */}
                    <span className="price">{`${p.price}$ /`}</span>
                    <span className="win">{`${p.win}$ `}</span>
                    <NavLink to={`order?${p.id}`}>
                      <input
                        className="order btn btn-primary"
                        value="order"
                        type="button"
                      />
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="gold">
          <h1>gold</h1>
          <div className="container con-gold">
            {data.map((p: any): any =>
              p.category === "gold" ? (
                <div onClick={handleClick} className="container">
                  <div className="con-img">
                    <img src={p.imgbundle} alt="" />
                  </div>

                  <div className="pra">
                    {/* <span className="name">{p.name}</span> */}
                    <span className="price">{`${p.price}$ /`}</span>
                    <span className="win">{`${p.win}$ `}</span>
                    <NavLink to={`order?${p.id}`}>
                      <input
                        className="order btn btn-primary"
                        value="order"
                        type="button"
                      />
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="platinum">
          <h1>platinum</h1>
          <div className="container con-platinum">
            {data.map((p: any): any =>
              p.category === "platinum" ? (
                <div onClick={handleClick} className="container">
                  <div className="con-img">
                    <img src={p.imgbundle} alt="" />
                  </div>

                  <div className="pra">
                    {/* <span className="name">{p.name}</span> */}
                    <span className="price">{`${p.price}$ /`}</span>
                    <span className="win">{`${p.win}$ `}</span>
                    <NavLink to={`order?${p.id}`}>
                      <input
                        className="order btn btn-primary"
                        value="order"
                        type="button"
                      />
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="vip">
          <h1>vip</h1>
          <div className="container con-vip">
            {data.map((p: any): any =>
              p.category === "vip" ? (
                <div onClick={handleClick} className="container">
                  <div className="con-img">
                    <img src={p.imgbundle} alt="" />
                  </div>

                  <div className="pra">
                    {/* <span className="name">{p.name}</span> */}
                    <span className="price">{`${p.price}$ /`}</span>
                    <span className="win">{`${p.win}$ `}</span>
                    <NavLink to={`order?${p.id}`}>
                      <input
                        className="order btn btn-primary"
                        value="order"
                        type="button"
                      />
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <Bubble />
    </>
  );
};

export default Products;
