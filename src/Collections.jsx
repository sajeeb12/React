

const DisplayNote = ({ note }) => {
  return (
    <section>
      <li>{note.content}</li>
    </section>
  )
}

const Collections = () => {
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
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {notes.map((note) => <DisplayNote key={note.id} note={note} />)}
      </ul>

    </div>
  )
}
export default Collections;