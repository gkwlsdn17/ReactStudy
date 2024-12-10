import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Notfound from './pages/Notfound'
import { getEmotionImage } from './util/get-emotion-images'

function App() {
  const [count, setCount] = useState(0)
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
    {/* 이미지는 import 방식으로 src에 asset에서 가져오는 방식을 사용하는 것이 좋음 
    캐시 메모리에 올려서 가져오는 방식인데, public에 올려서 경로를 직접 입력하는 방식을 해도 되지만, 이 방식으로 하면 가져오는데 오래걸림
    단, 이미지가 많으면 import 방식으로 하면 메모리에 너무 부하가 가니까 그때는 삼가는 것이 좋음 
    */}
    <div>
      <img src={getEmotionImage(1)}></img>
      <img src={getEmotionImage(2)}></img>
      <img src={getEmotionImage(3)}></img>
      <img src={getEmotionImage(4)}></img>
      <img src={getEmotionImage(5)}></img>
    </div>
    <div>
      {/* a태그를 이용하면 아예 페이지가 새로 렌더링됨. Link를 사용하면 컴포넌트만 새로 렌더링됨 */}
      {/* <a href='/'>Home</a> */}

      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New 페이지 이동</button>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      {/* :id 처럼 쓰면 동적 */}
      <Route path="/diary/:id" element={<Diary/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
