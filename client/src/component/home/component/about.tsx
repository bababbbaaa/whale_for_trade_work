import Typed from "react-typed";

const About = (props) => {
  return (
    <>
      {" "}
      <div className="about ">
        <h1 className=" animate__animated animate__pulse animate__infinite">
          About
        </h1>

        <Typed
          className="typing"
          strings={[
            `<span className="para">We are a group of traders, 
            we have spent a few years in the financial markets and we studied every static and variable in the economy of the world's whales of individuals and countries . 
            We inform you that 96% of the financial markets are owned by a number of individuals that don't exceed the fingers of one hand. We called them whales, 
            and the remaining 4% of the market is owned by the general public .
             We promise you that together we will be part of a bigger entity, we will make a boom in this world, we will become whales..
              We are not scammers, we are not 
            beginners, we are the creators of the future We are </span><span className="team">'WHALE 4 TRADE'</span> `,
          ]}
          typeSpeed={7}
        />
      </div>
    </>
  );
};

export default About;
