import './App.css'
import Bulb from './components/Bulb'
import Counter from './components/Counter'


function App() {
  // const state = useState(0)
  // console.log(state)
  // state는 배열의 값을 가지고 있어서 보통 배열로 씀
  
  // Bulb와 Counter처럼 나누는 이유는
  // useState가 서로 상관없는것이 같이 있으면 쓸데없이 다른것도 같이 랜더링되기때문

  return (
    <>
    <Bulb/>
    <Counter/>
      
    </>
  )
}

export default App
