import './App.css'
import MyButton from './MyButton'
import Scroller from './Scroller'
import Student from './Student'
import UserProfile from './UserProfile'
import Pokemon from './Pokemon'
import UserGreetings from './UserGreetings/UserGreetings'
import ButtonClick from './ButtonClick'
import Counter from './Counter/Counter'
import InputOnChange from './InputOnChange/InputOnChange'
import InputOnChange2 from './InputOnChange/InputOnChange2'
import ColorPicker from './ColorPicker/ColorPicker'
import FavoriteCar from './FavoriteCar/FavoriteCar'
import ListOfThings from './ListOfThings/ListOfThings'
import ListOfGames from './ListOfGames/ListOfGames'
import ComponentA from './UseContextComponents/ComponentA'

import "./UseContextComponents/UseContext.css"
import ComponentB from './UseContextComponents/ComponentB'
import TitleCounter from './Resize/TitleCounter'
import Resize from './Resize/Resize'
import Accordion from './AccordionPanel/Accordion'
import TabSwitcher from './TabSwitcher/TabSwitcher'
import { tabsTest } from './testVars'
import DigitalClock from './DigitalClock/DigitalClock'

function App() {

  return (
    <>
      {/* <Pokemon></Pokemon> */}
      {/* <Scroller></Scroller> */}
      {/* <MyButton></MyButton> */}
      {/* <Student name={"Goku"} age={40} isRecoverying={true}></Student> */}
      {/* <Student></Student> */}
      {/* <UserProfile></UserProfile> */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <UserGreetings></UserGreetings> */}
      {/* <UserGreetings isLoggedIn={true} userName="Bardock"></UserGreetings> */}
      {/* <Counter></Counter> */}
      {/* <InputOnChange></InputOnChange> */}
      {/* <InputOnChange2></InputOnChange2> */}
      {/* <ColorPicker></ColorPicker> */}
      {/* <FavoriteCar></FavoriteCar> */}
      {/* <ListOfThings></ListOfThings> */}
      {/* <ListOfGames></ListOfGames> */}
      {/* Use of useContext to make a variable availabre in another component */}
      {/* <ComponentA></ComponentA>  */}
      {/* Use of userEffect, that can be on every re-render, mount or change of value + mount */}
      {/* <TitleCounter></TitleCounter> */}
      {/* <Resize></Resize> */}
      {/* <Accordion></Accordion> */}
      {/* <TabSwitcher tabs={tabsTest} /> */}
      <DigitalClock></DigitalClock>
    </>
  )
}

export default App
