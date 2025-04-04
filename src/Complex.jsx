import { useState } from "react"

const Complex = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })
    const handleLeftClick = () => {
        return setClicks({
            ...clicks,
            left: clicks.left + 1
        })
    }
    const handleRightClick = () => {
        return setClicks({
            ...clicks,
            right:clicks.right + 1
        })
    }
    return (
        <section>
            <h1>Complex States</h1>
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>

            <p>Left: {clicks.left}</p>
            <p>Right:{clicks.right}</p>
        </section>
    )
}
export default Complex