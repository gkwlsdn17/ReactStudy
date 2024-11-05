import { useState, useRef } from 'react'

// 간단한 회원가입 폼
const Register = () => {
    // const [name, setName] = useState("")
    // const [birth, setBirth] = useState("")
    // const [country, setCountry] = useState("")
    // const [bio, setBio] = useState("")

    // const onChangeName = (e) => {
    //     setName(e.target.value)
    // }

    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value)
    // }

    // const onChangeCountry = (e) => {
    //     setCountry(e.target.value)
    // }

    // const onChangeBio = (e) => {
    //     setBio(e.target.value)
    // }

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const countRef = useRef(0)
    // let count를 쓸 수 없는 이유는, 리랜더링 되면서 계속 count 변수가 초기화되어
    // count값은 계속 0으로 리셋이 되기때문에 상태 값 저장은 useRef를 사용해야함
    // useRef는 값이 바뀌어도 랜더링에 영향은 주지않음. 단, 랜더링이 새로되었을 때 값이 그대로 잘 유지됨

    const inputRef = useRef()
    // input태그같은 태그를 useRef을 사용해서 가리킬수있음

    const onChange = (e) => {
        countRef.current++
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const onChangeName = (e) => {
        // ...input을 보내야 관련 없는 값들은 그대로 유지되기때문에 꼭 넣어야함
        setInput({
            ...input,
            name: e.target.value
        })
    }

    const onChangeBirth = (e) => {
        setInput({
            ...input,
            birth: e.target.value
        })
    }

    const onChangeCountry = (e) => {
        setInput({
            ...input,
            country: e.target.value
        })
    }

    const onChangeBio = (e) => {
        setInput({
            ...input,
            bio: e.target.value
        })
    }

    const onSubmit = () => {
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus()
        }
    }

    return(
        <div>
            <div>
                <input 
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    placeholder={"이름"} 
                    // onChange={onChangeName}
                    onChange={onChange}
                />
                {input.name}
            </div>
            <div>
                <input
                    name="birth"
                    type="date"
                    value={input.birth}
                    // onChange={onChangeBirth}
                    onChange={onChange}
                />
                {input.birth}
            </div>

            <div>
                <select value={input.country} 
                name="country"
                // onChange={onChangeCountry}
                onChange={onChange}
                >
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea value={input.bio} 
                name="bio"
                // onChange={onChangeBio}
                onChange={onChange}
                />
                {input.bio}
            </div>
            <button onClick={onSubmit}>
                제출
            </button>
        </div>
    )
}

export default Register