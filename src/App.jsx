import style from "./App.module.css" 
import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"

function App() {
  const [display, setDisplay] = useState("")
  const onButtonClick=(buttonText)=>{
    if (buttonText==='C'){
      setDisplay('')
    }
    else if(buttonText==='='){
      const equal=eval(display);
      setDisplay(equal);
    }
    else{
      setDisplay(display+buttonText);
    }
  }
  return (
    <center>
    <div className={style.mainbody}>
      <Display displayvalue={display}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
    </center>
  )
}

export default App
