import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import "./App.css"
import { useState, useEffect, useRef } from "react"
import Even from "./components/Even"

function App() {
  //부모에서 useState를 가져야함
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  
  const isMount = useRef(false)

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount")
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  // 뒤에 배열을 두지 않으면 리렌더링 될 때 마다 실행
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true
      return
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음
  // Even.jsx Component 참고


  // 배열에 들어간 값이 바뀌게 되면 콜백 함수를 수행함
  // 의존성 배열 (dependency array = deps)
  useEffect(()=>{
    console.log(`count: ${count}, input: ${input}`)
  }, [count, input])

  const onClickButton = (value) => {
    // setCount는 비동기로 동작하기 때문에, 이 아래로는 변경된 값을 제어할 수 없음
    // 그래서 setCount 밑에 console로 값을 찍으면 이전 값이 나옴
    // 반영을 하고 싶다면 useEffect를 사용해야함
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={((e)=>{setInput(e.target.value)})}/>
      </section>
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
