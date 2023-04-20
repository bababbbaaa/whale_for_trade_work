import logoBtc from "../../../image/btc.svg";
import logoBRL from "../../../image/ICON_BRL.svg";
import logoXAU from "../../../image/forex/XAU.png";
import logoEUR from "../../../image/forex/EUR.png";
import logoAED from "../../../image/forex/AED.png";
import CAD from "../../../image/forex/CAD.png";
import GBP from "../../../image/forex/GBP.png";
import JPY from "../../../image/forex/JPY.png";
import XAG from "../../../image/forex/XAG.png";
import QAR from "../../../image/forex/QAR.jpeg";
import KWD from "../../../image/forex/KWD.png";
import CHF from "../../../image/forex/CHF.png";

const Forex = (props) => {
  return (
    <>
      <div className={`container-usd animate__animated animate__bounceInUp`}>
        <div>
          <img src={logoBtc} alt="" />
          <span className="name-usd">BTC/USD :</span>
          <span className="number-used">{`${props.chart.BTC}$`}</span>
        </div>
        <div>
          <img src={logoXAU} alt="" />
          <span className="name-usd">XAU/USD :</span>
          <span className="number-used">{`${props.chart.XAU}$`}</span>
        </div>
        <div>
          <img src={logoEUR} alt="" />
          <span className="name-usd">EUR/USD :</span>
          <span className="number-used">{`${props.chart.EUR}$`}</span>
        </div>

        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">AED/USD :</span>
          <span className="number-used">{`${props.chart.AED}$`}</span>
        </div>
        <div>
          <img src={logoBRL} alt="" />
          <span className="name-usd">BRL/USD :</span>
          <span className="number-used">{`${props.chart.BRL}$`}</span>
        </div>
        <div>
          <img src={CAD} alt="" />
          <span className="name-usd">CAD/USD :</span>
          <span className="number-used">{`${props.chart.CAD}$`}</span>
        </div>
        <div>
          <img src={GBP} alt="" />
          <span className="name-usd">GBP/USD :</span>
          <span className="number-used">{`${props.chart.GBP}$`}</span>
        </div>
        <div>
          <img src={JPY} alt="" />
          <span className="name-usd">JPY/USD :</span>
          <span className="number-used">{`${props.chart.JPY}$`}</span>
        </div>

        <div>
          <img src={XAG} alt="" />
          <span className="name-usd">XAG/USD :</span>
          <span className="number-used">{`${props.chart.XAG}$`}</span>
        </div>
        <div>
          <img src={QAR} alt="" />
          <span className="name-usd">QAR/USD :</span>
          <span className="number-used">{`${props.chart.QAR}$`}</span>
        </div>
        <div>
          <img src={KWD} alt="" />
          <span className="name-usd">KWD/USD :</span>
          <span className="number-used">{`${props.chart.KWD}$`}</span>
        </div>
        <div>
          <img src={CHF} alt="" />
          <span className="name-usd">CHF/USD :</span>
          <span className="number-used">{`${props.chart.CHF}$`}</span>
        </div>
      </div>
    </>
  );
};

export default Forex;
