import { allform } from "../utils/question";
import style from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Quiz } from "../utils/type";
import { useAppDispatch } from "../store/hooks";
import { addQuiz } from "../store/slice/quiz.slice";

export default function SecondPage() {
  const { register, handleSubmit } = useForm<Quiz>();
  const dispatch = useAppDispatch();

  const handleResponse: SubmitHandler<Quiz> = (data: Quiz) => {
    const quizId = "firstQuiz";
    const quizData = data
    dispatch(addQuiz({quizId, quizData}));
  };
  return (
    <div className={style["form1"]}>
    <h2>Partie 2 : <br />
        question sur la partie Grand Line</h2>
    <form onSubmit={handleSubmit(handleResponse)} className={style["form"]}>
      {allform.firstQuiz.map((q) => {
        return (
          <div className={style["input-div"]} key={q.htmlFor}>
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
  )
}
