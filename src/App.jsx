import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import AutoScrollToTop from './components/AutoScrollToTop'
function App() {


  return (
    <BrowserRouter>
    <AutoScrollToTop/>
    <Routes>
      <Route path='/' element ={<Home />}></Route>
      <Route path='/contact' element ={<Contact />}>
      </Route>
    </Routes>
   
    
    </BrowserRouter>
  )
}

export default App
