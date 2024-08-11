import { useState } from 'react'
import ToDoList from './todo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<ToDoList/>)
}

export default App
