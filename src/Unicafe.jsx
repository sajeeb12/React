import { useState } from "react"

const Button = ({ onClick, btnText }) => {
    return (
        <section>
            <button onClick={onClick}>{btnText}</button>
        </section>
    )
}

const StatisticsLine = ({ text, value }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>

    )
}
const Statistics = ({ good, neutral, bad, totalClick, totalValue }) => {
    return (
        <section>
            <h2>Statistics</h2>
            {
                totalClick === 0 ?
                    <h3>No Feedback Given</h3> :
                    <table>
                        <StatisticsLine text="Good" value={good} />
                        <StatisticsLine text="Neutral" value={neutral} />
                        <StatisticsLine text="Bad" value={bad} />
                        <StatisticsLine text="All" value={totalClick} />
                        <StatisticsLine text="Average" value={totalValue / totalClick} />
                        <StatisticsLine text="Percentage" value={good / totalClick * 100} />

                    </table>
            }


        </section>
    )
}
const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [totalClick, setTotalClick] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    const handleGoodClick = () => {
        setTotalClick(totalClick + 1)
        setGood(good + 1)
        setTotalValue(totalValue + 1)
    }
    const handleNeutralClick = () => {
        setTotalClick(totalClick + 1)
        setNeutral(neutral + 1)
        setTotalValue(totalValue + 0)
    }
    const handleBadClick = () => {
        setTotalClick(totalClick + 1)
        setBad(bad + 1)
        setTotalValue(totalValue - 1)
    }
    return (
        <section>
            <h1>Give Feedback</h1>
            <Button onClick={handleGoodClick} btnText="Good" />
            <Button onClick={handleNeutralClick} btnText="Neutral" />
            <Button onClick={handleBadClick} btnText="Bad" />
            <Statistics good={good} neutral={neutral} bad={bad} totalClick={totalClick} totalValue={totalValue} />


        </section>
    )
}
export default Unicafe