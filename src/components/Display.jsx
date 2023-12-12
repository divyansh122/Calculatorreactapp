import style from "./Display.module.css"
const Display=()=> {
  return (
    <div>
       <input type="text" className={style.input} placeholder="Your output"/>
    </div>
  )
}
export default Display