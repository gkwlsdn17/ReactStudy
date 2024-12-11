import { useReducer, useState, useRef, createContext } from 'react'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Notfound from './pages/Notfound'
// import { getEmotionImage } from './util/get-emotion-images'
import Button from './components/Button'
import Header from './components/Header'

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-12-11").getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date("2024-12-10").getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date("2024-11-29").getTime(),
    emotionId: 3,
    content: "3번 일기 내용"
  }
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE' : 
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item)
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.data.id))
    default:
        return state;
  }
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)


  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기 추가
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    // 수정
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onDelete = (id) => {
    // 삭제
    dispatch({
      type: "DELETE",
      data: {
        id,
      }
    })
  }

  return (
    <>
    {/* 이미지는 import 방식으로 src에 asset에서 가져오는 방식을 사용하는 것이 좋음 
    캐시 메모리에 올려서 가져오는 방식인데, public에 올려서 경로를 직접 입력하는 방식을 해도 되지만, 이 방식으로 하면 가져오는데 오래걸림
    단, 이미지가 많으면 import 방식으로 하면 메모리에 너무 부하가 가니까 그때는 삼가는 것이 좋음 
    */}
    {/* <div>
      <img src={getEmotionImage(1)}></img>
      <img src={getEmotionImage(2)}></img>
      <img src={getEmotionImage(3)}></img>
      <img src={getEmotionImage(4)}></img>
      <img src={getEmotionImage(5)}></img>
    </div> */}
    {/* <div>
      {/* a태그를 이용하면 아예 페이지가 새로 렌더링됨. Link를 사용하면 컴포넌트만 새로 렌더링됨 */}
      {/* <a href='/'>Home</a> */}

      {/* <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link> */}
    {/* </div> */}
    {/* <button onClick={onClickButton}>New 페이지 이동</button> */}
{/*      
    <button onClick={() => {onCreate(new Date().getTime(), 1, "Hello")}}>추가</button>
    <button onClick={() => {onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다")}}>수정</button>
    <button onClick={() => { onDelete(1)}}>삭제</button> */}

    <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={{onCreate, onUpdate, onDelete}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              {/* :id 처럼 쓰면 동적 */}
              <Route path="/diary/:id" element={<Diary/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path='*' element={<Notfound/>}/>
            </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
