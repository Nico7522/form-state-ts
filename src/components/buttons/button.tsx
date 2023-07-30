import style from '../style.module.css'
import { PropsButton } from '../../utils/type'

export default function Button({text, condition}: PropsButton) {
  return (
    <button disabled={condition ? true : false} className={condition ? style['btn-disabled'] : style["btn"]} type="submit">
    {text}
  </button>
  )
}
