import { useSearchParams } from "react-router-dom"
const Home = () => {
    // http://localhost:5173/?myval=he
    const [params, setParams] = useSearchParams()
    console.log(params.get("myval"))

    return <div>Home</div>
}

export default Home