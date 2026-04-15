
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Schedule } from './components/schedule/Schedule'
import { Rides } from './components/rides/Rides'
import { Account } from './components/account/Account'
import 'bootstrap/dist/css/bootstrap.min.css';

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
