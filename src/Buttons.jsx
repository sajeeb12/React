
function Button(props) {
    const btnStyle = {
        backgroundColor: props.background,
        color: props.color,
        fontSize: props.font + 'px',
        border: 0,
        padding: 10
    }
    return (
        <button onClick={props.handleClick} style={btnStyle}>{props.text}</button>
    )
}

const Buttons = () => {
    const handleClick = () => {
        window.location.href = "https://www.google.com"
    }
    return (
        <div>
            <h2>Game of Buttons</h2>
            <Button handleClick={handleClick} text="Click me" color="red" font={12} background="grey" />
            <Button text="Do not Click me" color="white" font={16} background="black" />
        </div>
    )
}

export default Buttons