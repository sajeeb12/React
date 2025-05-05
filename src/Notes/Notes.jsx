import axios from 'axios'
import { useState, useEffect } from 'react'
const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'Make not important' : 'Make important'
    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}
const Notes = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(false)


    const handleNoteChange = (e) => {
        console.log(e.target.value)
        setNewNote(e.target.value)

    }

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/api/notes')
            .then(response => {
                console.log("Promise fullfilled", response.data)
                setNotes(response.data)
            }
            )
    }
    useEffect(hook, [])
    console.log("render", notes.length, 'notes')

    const addNote = (event) => {
        event.preventDefault()
        const newObj = {
            content: newNote,
            important: Math.random() < 0.5,
        }
        axios
            .post('http://localhost:3001/notes', newObj)
            .then(response => {
                console.log("Post Response", response)
                setNotes(notes.concat(response.data))
                setNewNote('')
            }

            )
    }

    const toggleImportance = (id) => {
        console.log('importance of ' + id + ' needs to be toggled')
    }
    return (
        <div>
            <form action="" onSubmit={addNote}>
                <input type='text' value={newNote} onChange={handleNoteChange} />
                <button type='submit'>Add Notes</button>
            </form>
            <h1>All notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notes.map(note =>
                    // <li key={note.id}> {note.content} </li>
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
                )}
            </ul>
        </div>
    )
}

export default Notes