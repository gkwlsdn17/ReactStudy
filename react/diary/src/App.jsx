import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Notfound from './pages/Notfound'

function App() {
  const [count, setCount] = useState(0)
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
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
