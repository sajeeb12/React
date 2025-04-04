function ListItem(props) {
  return (
    <li>{props.animal}</li>
  )
}

function List(props) {
  return (
    <ul>
      {props.animals.map(animal => {
        return animal.startsWith('W') ? <ListItem key={animal} animal={animal} /> : null
      })}

    </ul>
  )
}

const App = () => {
  const animals = ['Lion', 'Tiger', 'Bear', 'Wolf', 'Fox', 'Dog']
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export default App