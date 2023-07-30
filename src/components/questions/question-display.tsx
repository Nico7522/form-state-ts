import style from '../style.module.css'

export default function QuestionDisplay({htmlFor, errors, text, register}) {
  return (
    <div className={style["input-div"]} key={htmlFor}>
    {" "}
    <label htmlFor={htmlFor}>{text}</label>
    <input className={errors[htmlFor] ? style['input-error']: " "} {...register(htmlFor, { required: {value: true, message: "Champ requis !"} })} type="text" />
   {errors[htmlFor] && <p className={style['error']}>{errors[htmlFor]?.message}</p> }
  </div>
  )
}
