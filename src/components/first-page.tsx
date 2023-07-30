import { allform } from "../utils/question";
import style from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Quiz } from "../utils/type";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addQuiz } from "../store/slice/quiz.slice";
import { useEffect } from "react";
import Button from "./buttons/button";
import QuestionDisplay from "./questions/question-display";

export default function FirstPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Quiz>({
    defaultValues: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
    }
  });
  const dispatch = useAppDispatch();
  const responses = useAppSelector((state) => state.quiz.quizResponse);
  useEffect(() => {
    if (responses.firstQuiz) {
      for (const key in responses.firstQuiz) {
        let i = key as keyof Quiz;
        setValue(i, responses.firstQuiz[key]);
      }
    }
  });
  const handleResponse: SubmitHandler<Quiz> = (data: Quiz) => {
    console.log(data);
    
    const quizId = "firstQuiz";
    const quizData = data;
    dispatch(addQuiz({ quizId, quizData }));
  };
  return (
    <div className={style["form1"]}>
      <h2>
        Partie 1 : <br />
        question sur l'équipage
      </h2>
      <form onSubmit={handleSubmit(handleResponse)} className={style["form"]}>
        {allform.firstQuiz.map((q) => {
          return <QuestionDisplay key={q.htmlFor} htmlFor={q.htmlFor} errors={errors} text={q.text} register={register} option1={q.option1} option2={q.option2} option3={q.option3} />;
        })}
        <Button text={"envoyer"} condition={responses.firstQuiz} />
      </form>
    </div>
  );
}
