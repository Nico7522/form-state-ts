import { useState } from "react";
import FirstPage from "../components/first-page";
import SecondPage from "../components/second-page";
import style from "./style.module.css";
import "../App.css";
import ThirdPage from "../components/third-page";
import { pageSwitcher } from "../utils/wait-function";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { canSwitch } from "../store/slice/quiz.slice";
export default function Form() {
  const [currentPage, setCurrentPage] = useState<string>("page1");
  const [onMove, setOnMove] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>("");
  const changePage = useAppSelector(state => state.quiz.canSwitch);
  const dispatch = useAppDispatch();
  const moveDiv = () => {
    return new Promise<void>((resolve) => {
      setLoading("loading");
      setOnMove(true);
      resolve();
    });
  };

  const previousPage = async () => {
    dispatch(canSwitch(true))
    if (currentPage === "page1") {
      return;
    } 
    await moveDiv();
    await pageSwitcher(500, currentPage, '-', setLoading, setCurrentPage, setOnMove)
    
  };
  const nextPage = async () => {
    dispatch(canSwitch(false))
    if (currentPage === "page10") {
        return;
    }
    await moveDiv();
    await pageSwitcher(500, currentPage, '+', setLoading, setCurrentPage, setOnMove)
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
            style["divContainer2"] + " " + (onMove ? style["slide-out"] : "")
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
        <button disabled={currentPage === "page1"} onClick={() => previousPage()}>Page précédante</button>
        <button disabled={currentPage === "page10"  || !changePage} onClick={() => nextPage()}>Page suivante</button>
      </div>
    </div>
  );
}
