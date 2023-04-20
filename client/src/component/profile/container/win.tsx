import env from "../../../environments/enviroments";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Win = (props) => {
  const [dataWin, setDataWin] = useState<any>([]);
  const [num, setNum] = useState<any>([]);
  const win = async () => {
    try {
      await axios
        .get(`${env.url}/order/user/${JSON.parse(localStorage.user).id}`)
        .then((res) => setDataWin(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    win();
  }, []);
  const data: any = [];
  dataWin.map((w: any): any => data.push(w.win));

  let sum = data.reduce(function (a, b) {
    return Number(a) + Number(b);
  }, 0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setNum((sum / 30) * 2);
  //       sum = num;
  //     }, 300);
  //     return clearInterval(interval);
  //   }, [num]);
  //   console.log(num);

  return <>{`${Math.floor((sum / 30) * 7)}$`}</>;
};

export default Win;
