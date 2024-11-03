import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Main } from "./pages/main"
import { Login } from "./pages/login"
import { Navbar } from "./components/navbar"
import { CreatePost } from "./pages/create-post/create-post"

function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}>Home</Route>
            <Route path="/login" element={<Login />}>Login</Route>
            <Route path="/createpost" element={<CreatePost />}>Create Post</Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
