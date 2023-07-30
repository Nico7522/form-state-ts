import { PropsQuestionDisplay } from '../../utils/type'
import style from '../style.module.css'

export default function QuestionDisplay({htmlFor, errors, text, register, option1, option2, option3}: PropsQuestionDisplay) {
  return (
    <div  className={style["input-div"] + " " + (errors[htmlFor] ? style['error'] : "")} key={htmlFor}>
    {" "}
     <label htmlFor={htmlFor}>{text}</label>
    {/* <input className={errors[htmlFor] ? style['input-error']: " "} {...register(htmlFor, { required: {value: true, message: "Champ requis !"} })} type="text" /> */} 
    <select id={htmlFor} {...register(htmlFor, { required: {value: true, message: "Champ requis !"} })}>
        <option className={style['option']} value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
    </select>
   {errors[htmlFor] && <p className={style['error-display']}>{errors[htmlFor]?.message}</p> }
  </div>
  )
}
