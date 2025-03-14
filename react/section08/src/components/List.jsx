import { useEffect } from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }

        let data = todos.filter((todo)=>{
            return todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        })
        return data
    }

    // 리랜더링 될때마다 실행
    const filteredTodos = getFilteredData()
    
    return (
        <div className="List">
            <h4>Todo List </h4>
            <input 
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={onChangeSearch}
            />
            <div className='Todos_wrapper'>
                {filteredTodos.map((todo)=>{
                    return <TodoItem 
                    key={todo.id} 
                    {...todo} 
                    onUpdate={onUpdate}
                    onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default List