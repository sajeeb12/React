import axios from "axios";
import { useState, useEffect } from "react";

const DisplayPhonebook = ({ persons }) => {
    return (
        <ul>
            {persons.map(person =>
                <li key={person.name}>{person.name} {person.number}</li>
            )}
        </ul>
    )
}

const Btn = ({ text, onChange }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Search = ({ search, onChange }) => {
    return (
        <input type="text" value={search} onChange={onChange} />
    )
}

const Phonebook = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [search, setSearch] = useState("")
    const addPerson = (event) => {
        event.preventDefault();
        if (persons.some(person => person['name'].toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} is already added to the phonebook`);
            return;
        }

        setPersons(persons.concat({ name: newName, number: newNumber }))
        setNewName("")
        setNewNumber("")
    }

    const hook = () => {
        console.log('Phonebook effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('Person Fetched', response.data)
                setPersons(response.data)
            })
    }
    console.log('render persons', persons.length, 'persons')
    useEffect(hook, [])
    const filteredPersons = persons.filter(person => person['name'].toLowerCase().includes(search.toLowerCase()))
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }
    return (
        <section>
            <h1>Phonebook</h1>
            <h2>Search a Contact</h2>
            {/* <input type="text" value={search} onChange={handleSearchChange} /> */}
            <Search search={search} onChange={handleSearchChange} />
            <h2>Add a new contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={newName} onChange={handleNameChange} />
                </div>
                <br />
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={newNumber} onChange={handleNumberChange} />
                </div>
                <br />
                <button type="submit">Add Person</button>
            </form>
            <h2>Contacts</h2>
            <ul>
                {/* {filteredPersons.map((person, index) => <li key={index}>{person.name} {person.number}</li>)} */}
                <DisplayPhonebook persons={filteredPersons} />
            </ul>
        </section>


    )
}
export default Phonebook;