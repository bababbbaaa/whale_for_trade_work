/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "../../../environments/enviroments";
import { Link } from "react-router-dom";

const TreeProfile = (props) => {
  const [dataTree, setDataTree] = useState([]);
  const [dataBundleFree, setDataBundleFree] = useState([]);
  const [dataBundleFreeId, setDataBundleFreeId] = useState<any>([]);
  const handleClick = async () => {
    try {
      await axios
        .get(`${env.url}/tree/${JSON.parse(localStorage.user).id}`)
        .then((res) => setDataTree(res.data.data));
    } catch (err: any) {}
  };
  useEffect(() => {
    handleClick();
  }, []);

  // // // // // //const dataCreate =
  const checkUserTree = async () => {
    try {
      await axios
        .get(`${env.url}/users/${JSON.parse(localStorage.user).id}`)
        .then((res: any): any =>
          res.data.data.tree === null ? bundleFree() : ""
        );
    } catch (error) {}
  };
  const bundleFree = async () => {
    try {
      await axios.patch(
        `${env.url}/users/tree/${JSON.parse(localStorage.user).id}`,
        {
          id: JSON.parse(localStorage.user).id,
          tree: "get",
        }
      );
    } catch (error) {}
    try {
      await axios
        .get(`${env.url}/bundle`)
        .then((res) => setDataBundleFree(res.data.data));
    } catch (error) {}
    dataBundleFree.map((b) =>
      b === "sei whale" ? setDataBundleFreeId(b) : null
    );
    try {
      await axios
        .post(`${env.url}/order`, {
          userId: JSON.parse(localStorage.user).id,
          bundleId: dataBundleFreeId.id,
          price: "10",
          timeBuy: new Date(),
          name: "u whale",
        })
        .then(async () => {
          try {
            await axios.post(`${env.url}/transaction/`, {
              userId: JSON.parse(localStorage.user).id,
              category: "win bundle sai whale",
              price: `10`,
              timeJoin: new Date(),
            });
          } catch (error) {}
        });
    } catch (error) {}
  };
  useEffect(() => {
    if (dataTree.length === 10) {
      checkUserTree();
    }
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage: any = 5;
  const lastIndex: any = currentPage * recordsPerPage;
  const firstIndex: any = lastIndex - recordsPerPage;
  const records: any = dataTree.slice(firstIndex, lastIndex);
  const npage: any = Math.ceil(dataTree.length / recordsPerPage);
  const numbers: any = [...Array(npage + 1).keys()].slice(1);

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="tree">
      <div className="title">affiliate</div>
      <div className="list">
        <table>
          {records.map((tree: any) =>
            tree.length === 0 ? (
              <tr>
                <td>no aff</td>
              </tr>
            ) : tree.bundle !== null ? (
              <>
                <tr id="1" key={tree.id}>
                  <td className="user">{tree.iamemail}</td>
                  <td className="created">
                    {new Date(tree.timejoin).toDateString()}
                  </td>
                </tr>
              </>
            ) : (
              ""
            )
          )}
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
        </table>
      </div>
    </div>
  );
};

export default TreeProfile;
