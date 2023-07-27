import { allform } from "../utils/question";
import style from './style.module.css'
export default function FirstPage() {

    const handleResponse = () => {

    }
  return (
    <div className={style['form1']}>
      <h2 >Page 1</h2>
      <form onSubmit={handleResponse} className={style['form']}>
        {allform.firstQuiz.map((q) => {
            return (
                <div key={q.htmlfor}>
              {" "}
              <label htmlFor={q.htmlfor}>{q.text}</label>
              <input type="text" />
            </div>
          );
        })}
        <button className={style['btn']} type="submit">Envoyer</button>
      </form>
    </div>
  );
}
