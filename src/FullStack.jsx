

const Hello = ({ name, age }) => {
    const birthYear = () => {
        const year = new Date().getFullYear()
        return year - age
    }
    return (
        <section>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {birthYear()}</p>
        </section>
    )
}

const FullStack = () => {
    const name = "Sajeeb"
    const age = 26
    return (
        <div>
            <h1>Hello Full Stack Open</h1>
            <Hello name="Tamanna" age={5 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}
export default FullStack;