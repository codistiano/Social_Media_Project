import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Main } from "./pages/main"
import { Login } from "./pages/login"
import { Navbar } from "./components/navbar"

function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}>Home</Route>
            <Route path="/login" element={<Login />}>Home</Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
