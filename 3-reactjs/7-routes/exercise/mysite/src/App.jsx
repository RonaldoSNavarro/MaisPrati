import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>

          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={
            <ProtectedRoute>
              <Services/>
            </ProtectedRoute>}/>
          <Route path='/about' element={ <About/> } />
          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
