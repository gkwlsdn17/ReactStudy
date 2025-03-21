import {useReducer, useState, useRef, createContext, useEffect} from 'react'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Notfound from './pages/Notfound'

function reducer(state, action){
  let nextState;

  switch(action.type){
    case 'CREATE':{
      nextState = [action.data, ...state]
      break;
      // return [action.data, ...state]
    }
    case 'UPDATE' :{
      nextState =state.map((item) =>
          String(item.id) === String(action.data.id) ? action.data : item)
      break;
      // return state.map((item) =>
      //     String(item.id) === String(action.data.id) ? action.data : item)
    }

    case 'DELETE':
      nextState = state.filter((item) => String(item.id) !== String(action.data.id))
      break;
      // return state.filter((item) => String(item.id) !== String(action.data.id))
    case 'INIT':
      return action.data
    default:
        return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState))

  return nextState;
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0)

  useEffect(() => {
    const storedData = localStorage.getItem("diary")
    if(!storedData){
      setIsLoading(false)
      return
    }
    const parsedData = JSON.parse(storedData)
    let maxId = 0

    if(!Array.isArray(parsedData)){
      setIsLoading(false)
      return
    }

    parsedData.forEach((item) =>
    {
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    })

    idRef.current = maxId + 1

    dispatch({
      type: "INIT",
      data: parsedData
    })
    setIsLoading(false)
  }, [])



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

  if(isLoading){
    return <div>데이터 로딩 중입니다...</div>
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
