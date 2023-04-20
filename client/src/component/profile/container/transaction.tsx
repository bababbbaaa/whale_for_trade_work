import env from "../../../environments/enviroments";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Transaction = (props) => {
  const [dataTran, setDataTrans] = useState([]);
  const handleDataTrans = async () => {
    try {
      await axios
        .get(`${env.url}/transaction/${JSON.parse(localStorage.user).id}`)
        .then((res) => setDataTrans(res.data.data));
    } catch (error) {}
  };
  useEffect(() => {
    handleDataTrans();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage: any = 5;
  const lastIndex: any = currentPage * recordsPerPage;
  const firstIndex: any = lastIndex - recordsPerPage;
  const records: any = dataTran.slice(firstIndex, lastIndex);
  const npage: any = Math.ceil(dataTran.length / recordsPerPage);
  const numbers: any = [...Array(npage + 1).keys()].slice(1);

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="transaction">
      <div className="title">transaction</div>

      <div className="list">
        {records.map((t: any) => (
          <>
            <div key={t.id} className="with">
              <div className="prog">{t.category}</div>
              <div className="price">
                <span>price:</span>
                <span className="cont">{`-${t.price}$`}</span>
              </div>
              <div className="time">{new Date(t.timejoin).toDateString()}</div>
            </div>
          </>
        ))}
        <nav aria-label="Page navigation example" className="nav">
          <ul className="pagination">
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <Link
                  to="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Transaction;
