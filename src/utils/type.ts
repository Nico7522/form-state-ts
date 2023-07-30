import { FieldError, FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";

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
  canSwitch: boolean

};

export type QuizStore = {
  quizId: string 
  quizData: Quiz
}


export type PropsButton = {
  text: string
  condition: boolean
}

export type PropsQuestionDisplay = {
  htmlFor: keyof Quiz
  errors: FieldErrors<Quiz>
  text: string;
  register: UseFormRegister<Quiz>
}