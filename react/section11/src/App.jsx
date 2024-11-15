
import './App.css'
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Exam from './components/Exam'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]
function reducer(state, action){
  switch(action.type){
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((todo)=>todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo)
    case "DELETE":
      return state.filter((todo)=> todo.id !== action.targetId)
  }
}

// context는 app 밖에 선언
// export const TodoContext = createContext()
// console.log(TodoContext)

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch(
      {
        type: "CREATE",
        data: {
          id: idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime()
        }
      }
    )
  }, [])

  // deps를 주지 않으면 mount될때만 실행
    const onUpdate = useCallback((targetId) => {
      dispatch({
        type: "UPDATE",
        targetId: targetId
      })
    }, [])

  // deps를 주지 않으면 mount될때만 실행
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, [])

  // 다시 생성하지 않도록 useMemo로 설정
  const memoizedDispath = useMemo(()=>{return {onCreate, onUpdate, onDelete}}, [])

  return (
    <div className='App'>
      <Header/>
      {/* Provider에 전달할 요소 value에 넣음 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispath}>
          <Editor/>
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      
      {/* <Exam/> */}
    </div>
  )
}

export default App
