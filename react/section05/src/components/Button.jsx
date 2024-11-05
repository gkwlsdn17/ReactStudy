const Button = ({text, color, children}) => {
    const onClickButton = (e) => {
        console.log(text)
        console.log(e)
    }

    return (
    <button 
    onClick={onClickButton}
    // onMouseEnter={onClickButton}
    style={{
        color: text
    }}>
        {text} - {color}
        {children}
    </button>
    )
}

Button.defaultProps = {
    color: "black",
}

export default Button