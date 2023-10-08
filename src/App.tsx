import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Navbar from './components/navbar'
// import Contact from './components/contacts'
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
        </Routes>
      </Router>
        
    </>
  )
}

export default App