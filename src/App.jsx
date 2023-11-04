import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './components/Test'
import Home from './views/Home'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home />}>

      </Route>
    </Routes>
     <Test />
    
    </BrowserRouter>
  )
}

export default App
