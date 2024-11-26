import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import MyButton from './MyButton'
import UserProfile from './UserProfile'
import ScrollView from './ScrollView'

function App() {

  return (
    <>
      <Header></Header>
      <Food></Food>
      <UserProfile></UserProfile>
      <ScrollView></ScrollView>
      <MyButton></MyButton>
      <Footer></Footer>
    </>
  )
}

export default App
