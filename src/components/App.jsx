import './App.css'
import MyButton from './MyButton'
import Scroller from './Scroller'
import Student from './Student'
import UserProfile from './UserProfile'
import Pokemon from './Pokemon'
import UserGreetings from './UserGreetings/UserGreetings'

function App() {

  return (
    <>
      {/* <Pokemon></Pokemon>
      <Scroller></Scroller>
      <UserProfile></UserProfile>
      <MyButton></MyButton>
      <Student name={"Goku"} age={40} isRecoverying={true}></Student>
      <Student></Student> */}
      <UserGreetings></UserGreetings>
      <UserGreetings isLoggedIn={true} userName="Bardock"></UserGreetings>
    </>
  )
}

export default App
