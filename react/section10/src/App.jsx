
import './App.css'
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef, useReducer, useCallback } from 'react'
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
  const onDelete = useCallback(()=>{
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, [])

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      {/* <Exam/> */}
    </div>
  )
}

export default App
