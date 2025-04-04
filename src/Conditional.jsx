import { useState } from "react"

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}


const Conditional = () => {
    const [value, setValue] = useState(20)
    const resetToZero = () => setValue(0)
    return (
        <section>
            <h1>Conditional Rendering</h1>
            <h2>Value: {value}</h2>
            <Button onClick={resetToZero} text="Reset" />
        </section>
    )
}
export default Conditional