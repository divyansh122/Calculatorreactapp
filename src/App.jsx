import style from "./App.module.css" 
import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"

function App() {

  return (
    <center>
    <div className={style.mainbody}>
      <Display/>
      <ButtonsContainer/>
    </div>
    </center>
  )
}

export default App
