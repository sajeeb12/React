import { useState } from "react"

const Arrays = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
    const handleLeftClick = () => {

        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
        console.log(`Button clicked ${updatedLeft + right} times`)
        setAll([...allClicks, 'L'])

    }


    const handleRightClick = () => {
        // console.log(`Button clicked ${total} times`)
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(updatedRight + left)
        console.log(`Button clicked ${updatedRight + left} times`)
        setAll(allClicks.concat('R'))

    }
    return (
        <section>
            <h1>Handling Arrays</h1>
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            <p>Left: {left}</p>
            <p>Right: {right}</p>
            <p>All: {allClicks.join(' ')}</p>
        </section>
    )
}
export default Arrays