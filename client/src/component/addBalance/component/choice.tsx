import vodafoneCash from "../../../image/download (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
const Choice = (props) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={props.handelChange}
          id="flexRadioDefault1"
          value="vodafone"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          <img src={vodafoneCash} alt="" />
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={props.handelChange}
          value="card"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          <FontAwesomeIcon icon={faCreditCard} />
        </label>
      </div>
    </>
  );
};

export default Choice;
