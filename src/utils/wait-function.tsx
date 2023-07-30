import { Dispatch, SetStateAction } from "react";

export const pageSwitcher = async (
  time: number,
  currentPage: string,
  sign: string,
  setLoading: Dispatch<SetStateAction<string>>,
  setCurrentPage: Dispatch<SetStateAction<string>>,
  setOnMove: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  return new Promise<void>((resolve) => {
   
    
    setTimeout(() => {
      setLoading("loaded");
      if (currentPage === "responses") {
        setCurrentPage("page2");
        setOnMove(false);
        resolve();
      } else {
        const current = currentPage.slice(-1);
        const newPage =
          sign === "+"
            ? "page" + (Number(current) + 1)
            : "page" + (Number(current) - 1);
        setCurrentPage(newPage);
        setOnMove(false);
        resolve();
      }
    }, time);
  });
};
