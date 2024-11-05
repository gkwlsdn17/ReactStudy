import { useState } from 'react'
import useInput from '../hooks/useInput'

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// ex) const state = useState() 를 여기서 선언하면 에러
// 2. 조건부로 호출될 수는 없다 (조건문이나 반복문에서 선언할 수 없음)
// 3. 나만의 훅 (Custom Hook)을 직접 만들 수 있다. (hooks폴더의 useInput 참고)

const HookExam = () => {
    const [input, onChange] = useInput() // use를 앞에 붙이면 커스텀훅 만들수있음
    const [input2, onChange2] = useInput()
    return (
        <>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </>
    )
}

export default HookExam