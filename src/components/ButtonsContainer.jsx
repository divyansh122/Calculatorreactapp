import style from "./ButtonsContainer.module.css"
const ButtonsContainer=({onButtonClick})=> {
  const Buttons=['+','-','*','/','C','.','1','2','3','4','5','6','7','8','9','0','='];
  return (
      <div className={style.buttoncontainer}>
        {Buttons.map((buttonName)=>(
        <button key={buttonName} onClick={()=>onButtonClick(buttonName)} className={style.button}>{buttonName}
        </button>
        ))}
      </div>
  )
}

export default ButtonsContainer;