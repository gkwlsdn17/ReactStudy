import "./Editor.css"
import EmotionItem from "./EmotionItem"
import Button from "../components/Button"
import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { emotionList } from "../util/constants"
import { getStringedDate } from "../util/get-stringed-date"


const Editor = ({initData , onSubmit}) => {
    const nav = useNavigate()

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    })

    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        if(name === "createdDate"){
            value = new Date(value)
        }
        setInput({
            ...input,
            [name]: value,
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input)
    }


    useEffect(()=>{
        console.log("editor useEffect, initData" + initData)
        if(initData){
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            })
        }
    }, [initData])
    

    return <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input name="createdDate" 
            type="date" 
            value={getStringedDate(input.createdDate)}
            onChange={onChangeInput}
            />
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {emotionList.map((item) => 
                    <EmotionItem 
                    onClick = {
                        () => onChangeInput({
                            target: {
                                name: "emotionId",
                                value: item.emotionId,
                            }
                        })
                    }
                    key={item.emotionId} 
                    {...item} 
                    isSelected={item.emotionId === input.emotionId}/>)
                }
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea placeholder="오늘은 어땠나요?" name="content" value={input.content} onChange={onChangeInput}></textarea>
        </section>
        <section className="button_section">
            <Button text={"취소하기"} onClick={() => nav(-1)}/>
            <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmitButton}/>
        </section>
    </div>
}

export default Editor