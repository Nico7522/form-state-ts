import { useAppSelector } from "../store/hooks";
import { allform } from "../utils/question";
import { allresponses } from "../utils/responses";
import { AllResponses, Quiz, QuizResponses } from "../utils/type";

export default function ResponsePage() {

    const userResponses = useAppSelector(state => state.quiz.quizResponse)
    for (const key in userResponses) {
        let i = key as keyof AllResponses
     console.log(userResponses[key]);
     console.log(allresponses[i]);
     
     
    }
    allform
    allresponses
  return (
    <div>
      <h2>Vos résultats : </h2>
      <h3>Première page : </h3>
      <h3>Deuxième page : </h3>
    </div>
  );
}
