import {Route ,BrowserRouter as Router,Routes} from "react-router-dom";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";


function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contacts' element={<Contacts/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
