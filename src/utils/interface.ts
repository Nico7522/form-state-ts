import { Quiz } from "./type";


export interface AllForm {
    firstQuiz: FormQuestion[]
    secondQuiz: FormQuestion[]
}


export interface FormQuestion {
    htmlFor: keyof Quiz;
    text: string;
    option1: string;
    option2: string;
    option3: string;
  }