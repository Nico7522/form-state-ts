import { allform } from "../utils/question";
import style from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Quiz } from "../utils/type";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addQuiz } from "../store/slice/quiz.slice";
import { useEffect } from "react";

export default function FirstPage() {
  const { register, handleSubmit, setValue } = useForm<Quiz>();
  const dispatch = useAppDispatch();
  const responses = useAppSelector(state => state.quiz.quizResponse)
useEffect(() => {
  if (responses.firstQuiz) {
    for (const key in responses.firstQuiz) {
      let i = key as keyof Quiz
     setValue(i, responses.firstQuiz[key] )
    }

  }
})

  const handleResponse: SubmitHandler<Quiz> = (data: Quiz) => {
    const quizId = "firstQuiz";
    const quizData = data
    dispatch(addQuiz({quizId, quizData}));
  };
  return (
    <div className={style["form1"]}>
      <h2>Page 1</h2>
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
  );
}
