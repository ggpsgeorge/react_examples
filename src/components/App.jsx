import { useState } from 'react'
import './App.css'
import Scroller from './Scroller'
import Student from './StudentProps'
import UserProfile from './UserProfile'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [student, setStudent] = useState("")

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    setStudent(user.name)
  });

  return (
    <>
      <Scroller></Scroller>
      <UserProfile></UserProfile>
      <Student name={student}></Student>
    </>
  )
}

export default App
