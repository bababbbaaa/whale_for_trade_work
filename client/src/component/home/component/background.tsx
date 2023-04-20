import imgBackground from "../../../image/1001504.jpg";
const Background = (props) => {
  return (
    <>
      {" "}
      <div className="img">
        <img src={imgBackground} className="d-block  img-background" alt="" />
      </div>
    </>
  );
};

export default Background;
