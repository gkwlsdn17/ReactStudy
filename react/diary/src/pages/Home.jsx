import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"
import usePageTitle from "../hooks/usePageTitle"

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime() // 마지막날
    return data.filter((item) => item.createdDate >= beginTime && item.createdDate <= endTime)
}
const Home = () => {
    
    const [pivotDate, setPivotDate] = useState(new Date())
    const data = useContext(DiaryStateContext)
    const monthlyData = getMonthlyData(pivotDate, data)

    usePageTitle("감정 일기장")
    
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
        
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>} 
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}/>
            <DiaryList data={monthlyData}/>
        </div>
    )
}

export default Home