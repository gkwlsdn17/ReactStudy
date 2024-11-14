import { useEffect } from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo, useContext } from 'react'
import { TodoContext } from '../App'

const List = () => {
    const { todos } = useContext(TodoContext)
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

    const getAnalyzedData = () => {
        const totalCount = todos.length
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length
        const notDoneCount = totalCount - doneCount

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }

    // const {totalCount, doneCount, notDoneCount } = getAnalyzedData()
    const {totalCount, doneCount, notDoneCount } = useMemo(()=>{
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length
        const notDoneCount = totalCount - doneCount

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])

    return (
        <div className="List">
            <h4>Todo List </h4>

            <div>
                totalCount: {totalCount}
            </div>
            <div>
            doneCount: {doneCount}
            </div>
            <div>
            notDoneCount: {notDoneCount}
            </div>

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
                    />
                })}
            </div>
        </div>
    )
}

export default List