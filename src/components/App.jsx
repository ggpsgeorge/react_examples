import './App.css'
import Patient from './Patient'
import PatientScroller from './PatientScroller'
import Pokemon from './Pokemon'
import Scroller from './Scroller'
import Student from './Student'
import UserProfile from './UserProfile'

function App() {

  return (
    <>
      <Pokemon></Pokemon>
      <Patient></Patient>
      <Scroller></Scroller>
      <PatientScroller></PatientScroller>
      <UserProfile></UserProfile>
      <Student name={"Goku"}></Student>
    </>
  )
}

export default App
