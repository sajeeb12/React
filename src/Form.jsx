import { useState } from "react";
// import { notes } from './data/note'

const Form = () => {
    const notes = [
        {
            id: 1,
            content: 'HTML is easy',
            important: true
        },
        {
            id: 2,
            content: 'Browser can execute only JavaScript',
            important: false
        },
        {
            id: 3,
            content: 'GET and POST are the most important methods of HTTP protocol',
            important: true
        }
    ]
    const [note, setNote] = useState(notes)
    const [newNote, setNewNote] = useState('a new note...')
    const addNote = (event) => {
        event.preventDefault()
        const newNoteObject = {
            id: String(note.length + 1),
            content: newNote,
            important: Math.random() < 0.5
        }
        setNote(note.concat(newNoteObject))
        setNewNote('')
        // console.log(event.target.value)
    }
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    return (
        <section>
            <h1>Notes</h1>
            <ul>
                {note.map(note => <li key={note.id}>{note.content}</li>)}
            </ul>
            <form onSubmit={addNote}>
                {/* <input type="text" placeholder="Add a new note" /> */}
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}
export default Form;