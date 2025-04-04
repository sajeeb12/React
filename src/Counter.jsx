import { useState } from "react";

const Display = ({ counter }) => {
    return (
        <section>
            <h3>Value: {counter}</h3>
        </section>
    )
}

const Button = ({ onClick, text }) => {
    console.log("Increment button rendered")
    return (
        <section>
            <button onClick={onClick}>{text}</button>
        </section>
    )
}

const Counter = () => {
    const [counter, setCounter] = useState(0)
    // setTimeout(() => setCounter(counter + 1), 1000)

    const Increment = () => setCounter(counter + 1)
    const Decrement = () => setCounter(counter - 1)
    const SetToZero = () => setCounter(0)

    console.log("rendering", counter)
    return <div>
        <Display counter={counter} />
        {/* <h1>{counter}</h1> */}
        <Button onClick={Increment} text="Increment" />
        <Button onClick={SetToZero} text="Reset" />
        <Button onClick={Decrement} text="Decrement" />
    </div>
}
export default Counter;