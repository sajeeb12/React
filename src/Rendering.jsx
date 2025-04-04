function Item() {
    return (
        <li>
        </li>
    )


}

function PackingList() {
    return (
        <section>

        </section>
    )
}
const Rendering = () => {
    const people = [
        {
            id: 0,
            name: 'John',
            profession: 'Developer',
        },
        {
            id: 1,
            name: 'Jane',
            profession: 'Designer',
        },
        {
            id: 2,
            name: 'Jim',
            profession: 'Manager',
        },
        {
            id: 3,
            name: 'Jill',
            profession: 'Developer',
        },
        {
            id: 4,
            name: 'Joe',
            profession: 'Developer',
        },
    ]
    const listItem = people.filter(person => person.profession === 'Developer')
        .map(person => <li key={person.id}>{person.name}</li>)
    return (
        <div>
            <h1>Rendering List</h1>
            <PackingList />
            <ul>{listItem}</ul>
        </div>
    )
}

export default Rendering