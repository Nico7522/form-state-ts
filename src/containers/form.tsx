import { useState } from "react";
import FirstPage from "../components/first-page";
import SecondPage from "../components/second-page";
import style from "./style.module.css";
import "../App.css";

import { pageSwitcher } from "../utils/wait-function";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { canSwitch } from "../store/slice/quiz.slice";
import ResponsePage from "../components/response-page";
export default function Form() {
  const [currentPage, setCurrentPage] = useState<string>("page1");
  const [onMove, setOnMove] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>("");

  const numberOfQuizFinish = useAppSelector((state) => state.quiz.numberOfQuizFinish)
  const currentPageNumber = Number(currentPage.slice(-1));
  const dispatch = useAppDispatch();
  console.log(currentPage);
  
  const moveDiv = () => {
    return new Promise<void>((resolve) => {
      setLoading("loading");
      setOnMove(true);
      resolve();
    });
  };

  const previousPage = async () => {
    dispatch(canSwitch(true));
    if (currentPage === "page1") {
      return;
    }
    await moveDiv();
    await pageSwitcher(
      500,
      currentPage,
      "-",
      setLoading,
      setCurrentPage,
      setOnMove
    );
  };
  const nextPage = async () => {
    // dispatch(canSwitch(false));
    if (currentPage === "page10") {
      console.log("first");

      return;
    }
    if (currentPage === "page2") {
      await moveDiv();
      setCurrentPage("responses");
      return
    }
    console.log("second");
    await moveDiv();
    await pageSwitcher(
      500,
      currentPage,
      "+",
      setLoading,
      setCurrentPage,
      setOnMove
    );
  };
  return (
    <div className={style["total-container"]}>
      {currentPage === "page1" && (
        <div
          className={
            style["divContainer"] +
            " " +
            (onMove === true ? style["slide-out"] : "")
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
      {currentPage === "responses" && (
        <div
          className={
            style["divContainer3"] + " " + (onMove ? style["move"] : "")
          }
        >
          <ResponsePage />
        </div>
      )}
      {loading === "loading" && <div className={style["loader"]}></div>}
      <div className={style["button-container"]}>
        <button
          disabled={currentPage === "page1"}
          onClick={() => previousPage()}
        >
          Page précédante
        </button>
        {currentPage !== "responses" && (
          <button
            disabled={currentPage === "page10" || (numberOfQuizFinish-currentPageNumber < 0)}
            onClick={() => nextPage()}
          >
            Page suivante
          </button>
        )}
      </div>
    </div>
  );
}
