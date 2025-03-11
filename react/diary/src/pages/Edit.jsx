import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext, DiaryStateContext } from "../App"
import useDiary from "../hooks/useDiary"
const Edit = () => {
    const params = useParams()
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext)
    const curDiaryItem = useDiary(params.id)

    const onClickDelete = () => {
        const ret = window.confirm("삭제 하시겠습니까?"); // true / false
        if(ret){
            console.log("삭제")
            onDelete(params.id);
            nav('/', {replace: true}) // 뒤로가기 방지
        }
    }

    const onSubmit = (input) =>{
        console.log(input)
        if(
            window.confirm("일기를 정말 수정할까요?")
        ){
            onUpdate(
                params.id,
                input.createdDate.getTime(), 
                input.emotionId, 
                input.content
            )
            nav("/", {replace: true}) // 뒤로가기 방지
        }
        
    }

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"}></Button>}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}></Button>}
            ></Header>
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit