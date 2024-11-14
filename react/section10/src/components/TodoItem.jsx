import './TodoItem.css'
import { memo } from 'react'
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    
    const onChangeCheckbox = () => {
        onUpdate(id)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return <div className="TodoItem">
        <input 
            onChange={onChangeCheckbox}
            type="checkbox" 
            checked={isDone}/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
}

// // 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     // 객체는 주소값을 가진 값을 가지고있어서, 새로 만들어질때 주소가 계속 바뀌니까. 그냥 memeo만 쓰면 적용이 안됨
//     // ex) TodoItem은 onUpdate, onDelete를 매개변수로 가지고있어서. 이 요소들은 랜더링될때 계속 주소값이 바뀌기 때문에 영향이 미침


//     if(prevProps.id !== nextProps.id) return false
//     if(prevProps.isDone !== nextProps.isDone) return false
//     if(prevProps.content !== nextProps.content) return false
//     if(prevProps.date !== nextProps.date) return false

//     return true

// })
export default memo(TodoItem)