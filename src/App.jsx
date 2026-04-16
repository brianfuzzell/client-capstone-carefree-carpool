
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Schedule } from './components/schedule/Schedule'
import { Rides } from './components/rides/Rides'
import { Account } from './components/account/Account'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/rides" element={<Rides />} />
      <Route path="/account" element={<Account />} />
    </Routes>      
  )
}
