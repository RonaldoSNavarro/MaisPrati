import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>

          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={ <About/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
