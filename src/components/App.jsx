import './App.css'
import MyButton from './MyButton'
import Scroller from './Scroller'
import Student from './Student'
import UserProfile from './UserProfile'
import Pokemon from './Pokemon'
import UserGreetings from './UserGreetings/UserGreetings'
import ButtonClick from './ButtonClick'

function App() {

  return (
    <>
      {/* <Pokemon></Pokemon>
      <Scroller></Scroller>
      <MyButton></MyButton>
      <Student name={"Goku"} age={40} isRecoverying={true}></Student>
      <Student></Student> */}
      <UserProfile></UserProfile>
      <ButtonClick></ButtonClick>
      <UserGreetings></UserGreetings>
      <UserGreetings isLoggedIn={true} userName="Bardock"></UserGreetings>
    </>
  )
}

export default App
