
import './App.css'
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef } from 'react'

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
function App() {
  
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newTodo, ...todos])
    
  }

  const onUpdate = (targetId) => {
    // todos state 값들 중에 targetId와 일치하는 id를 찾아 isDone 변경
    // setTodos(todos.map((todo)=>{
    //   if(todo.id === targetId){
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone
    //     }
    //   }
    //   return todo
    // }))
    setTodos(todos.map((todo)=>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    ))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=> todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
