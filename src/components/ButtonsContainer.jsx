import style from "./ButtonsContainer.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
const ButtonsContainer=({onButtonClick})=> {
  const Buttonscal=['+','-','*','/'];
  const Buttonsnum=['1','2','3','4','5','6','7','8','9','0']
  const Buttonsequal=['C','.','=']
  return (
      <div className={style.buttoncontainer}>
        {Buttonscal.map((buttonName)=>(
        <button key={buttonName} onClick={()=>onButtonClick(buttonName)} className={`${style.button} btn `}>{buttonName}
        </button>
        ))}
        {Buttonsnum.map((buttonNums)=>(
          <button key={buttonNums} onClick={()=>onButtonClick(buttonNums)} className={`${style.buttonnums} btn`}>{buttonNums}</button>
        ))}
        {Buttonsequal.map((buttoncalc)=>(
          <button key={buttoncalc} onClick={()=>onButtonClick(buttoncalc)} className={`${style.buttoncalc} btn`}>{buttoncalc}</button>
        ))}
      </div>
  )
}

export default ButtonsContainer;