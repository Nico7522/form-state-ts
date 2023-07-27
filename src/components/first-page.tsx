import { useEffect, useState } from "react";
import { allform } from "../utils/question";
import style from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Quiz } from "../utils/type";

export default function FirstPage() {
  const [result, setResult] = useState<Quiz | {} >({});
  const { register, handleSubmit } = useForm<Quiz>();

  useEffect(() => {
    console.log(result);
  }, [result]);
  const handleResponse: SubmitHandler<Quiz> = (data: Quiz) => {
    setResult(data);
  };
  return (
    <div className={style["form1"]}>
      <h2>Page 1</h2>
      <form onSubmit={handleSubmit(handleResponse)} className={style["form"]}>
        {allform.firstQuiz.map((q) => {
          return (
            <div key={q.htmlFor}>
              {" "}
              <label htmlFor={q.htmlFor}>{q.text}</label>
              <input {...register(q.htmlFor)} type="text" />
            </div>
          );
        })}
        <button className={style["btn"]} type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
