import style from "./Display.module.css"
const Display=({displayvalue})=> {
  return (
    <div>
       <input type="text" className={style.input} placeholder="" value={displayvalue} readOnly/>
    </div>
  )
}
export default Display