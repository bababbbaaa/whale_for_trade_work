import axios from "axios";
import { useEffect, useState } from "react";
import "./verification.css";
import env from "../../environments/enviroments";
import { useNavigate } from "react-router-dom";

const Verification = (props) => {
  const [random, setRandom] = useState<any>([]);
  const [errCode, setErrCode] = useState<any>("");
  const [input, setInput] = useState({
    code: "",
  });
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const re = async () => {
    try {
      axios.post(`${env.ver}/ver`, {
        email: window.location.search.slice(1),
        number: setRandom(Math.floor(Math.random() * 75612345)),
      });
    } catch (error) {}
  };
  const navigate = useNavigate();
  console.log(random);
  console.log(input.code);

  const check = () => {
    if (input.code === random) {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    re();
  }, []);
  return (
    <>
      <div className="back"></div>
      <div className="ver">
        <label htmlFor="text">
          pleas enter here code from your inbox :
          {window.location.search.slice(1)}
        </label>
        <input type="text" name="code" onChange={handelChange} />
        <input type="submit" onClick={check} />
        <div className="error">{errCode}</div>
      </div>
    </>
  );
};

export default Verification;
