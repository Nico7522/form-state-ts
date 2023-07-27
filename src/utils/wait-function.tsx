import { Dispatch, SetStateAction } from "react";

export const wait = async (
  time: number,
  currentPage: string,
  setLoading: Dispatch<SetStateAction<string>>,
  setCurrentPage: Dispatch<SetStateAction<string>>,
  setOnMove: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      setLoading("loaded");
      if (currentPage === "page10") {
        return;
      } else {
        const current = currentPage.slice(-1);
        const previousPage = "page" + (Number(current) + 1);
        setCurrentPage(previousPage);
        setOnMove(false);
        resolve()
      }
    }, time);
  });
};
