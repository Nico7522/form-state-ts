import { FieldErrors, UseFormRegister } from "react-hook-form";

export type Quiz = {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
};

export type QuizData = {
  quizResponse: any;
  canSwitch: boolean;
};

export type QuizStore = {
  quizId: string;
  quizData: Quiz;
};

export type PropsButton = {
  text: string;
  condition: boolean;
};

export type PropsQuestionDisplay = {
  htmlFor: keyof Quiz;
  errors: FieldErrors<Quiz>;
  text: string;
  register: UseFormRegister<Quiz>;
  option1: string;
  option2: string;
  option3: string;
};

export type QuizResponses = {
  response1: string;
  response2: string;
  response3: string;
  response4: string;
  response5: string;
  response6: string;
  response7: string;
  response8: string;
  response9: string;
  response10: string;
};

export type AllResponses = {
  firstQuiz: QuizResponses
  secondQuiz: QuizResponses
}
