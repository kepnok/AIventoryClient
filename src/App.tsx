import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Chat } from "./pages/Chat"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
