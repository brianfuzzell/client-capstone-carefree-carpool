
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Schedule } from './components/schedule/Schedule'
import { Rides } from './components/rides/Rides'
import { Account } from './components/account/Account'

export const App = () => {

  return (
    <>
    <NavBar />
    <Schedule />
    <Rides />
    <Account />
    </>      
  )
}
