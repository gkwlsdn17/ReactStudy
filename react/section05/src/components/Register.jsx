import {useState} from 'react'

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

    const onChange = (e) => {
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

    return(
        <div>
            <div>
                <input 
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
        </div>
    )
}

export default Register