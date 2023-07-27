import { useState } from "react";
import FirstPage from "../components/first-page";
import SecondPage from "../components/second-page";
import style from "./style.module.css";
import "../App.css";
import ThirdPage from "../components/third-page";
import { wait } from "../utils/wait-function";
export default function Form() {
  const [currentPage, setCurrentPage] = useState<string>("page1");
  const [onMove, setOnMove] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>("");
  const moveDiv = () => {
    return new Promise<void>((resolve) => {
      setLoading("loading");
      setOnMove(true);
      resolve();
    });
  };

  const previousPage = () => {
    if (currentPage === "page1") {
      return;
    } 
      const current = currentPage.slice(-1);
      const previousPage = "page" + (Number(current) - 1);
      setCurrentPage(previousPage);
    
  };
  const nextPage = async () => {
    if (currentPage === "page10") {
        return;
    }
    await moveDiv();
    await wait(500, currentPage, setLoading, setCurrentPage, setOnMove )
  };
  return (
    <div className={style["total-container"]}>
      {currentPage === "page1" && (
        <div
          className={
            style["divContainer"] + " " + (onMove === true ? style["slide-out"] : "")
          }
        >
          <FirstPage />
        </div>
      )}
      {currentPage === "page2" && (
        <div
          className={
            style["divContainer2"] + " " + (onMove ? style["move"] : "")
          }
        >
          <SecondPage />
        </div>
      )}
      {currentPage === "page3" && (
        <div
          className={
            style["divContainer3"] + " " + (onMove ? style["move"] : "")
          }
        >
          <ThirdPage />
        </div>
      )}
      {loading === "loading" && <div className={style["loader"]}></div>}
      <div className={style["button-container"]}>
        <button onClick={() => previousPage()}>Page précédante</button>
        <button onClick={() => nextPage()}>Page suivante</button>
      </div>
    </div>
  );
}
