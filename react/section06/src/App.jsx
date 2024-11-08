import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import "./App.css"
import { useState } from "react"

function App() {
  //부모에서 useState를 가져야함
  const [count, setCount] = useState(0)
  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
