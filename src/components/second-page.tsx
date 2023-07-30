import { allform } from "../utils/question";
import style from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Quiz } from "../utils/type";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addQuiz } from "../store/slice/quiz.slice";
import Button from "./buttons/button";
import QuestionDisplay from "./questions/question-display";

export default function SecondPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<Quiz>();
  const dispatch = useAppDispatch();
  const responses = useAppSelector(state => state.quiz.quizResponse)
  const handleResponse: SubmitHandler<Quiz> = (data: Quiz) => {
    const quizId = "secondQuiz";
    const quizData = data
    dispatch(addQuiz({quizId, quizData}));
  };
  return (
    <div className={style["form1"]}>
    <h2>Partie 2 : <br />
        question sur la partie Grand Line</h2>
    <form onSubmit={handleSubmit(handleResponse)} className={style["form"]}>
      {allform.secondQuiz.map((q) => {
        return (
          <QuestionDisplay htmlFor={q.htmlFor} errors={errors} text={q.text} register={register} option1={q.option1} option2={q.option2} option3={q.option3}  />
        );
      })}
      <Button text={"envoyer"} condition={responses.secondQuiz} />
    </form>
  </div>
  )
}
