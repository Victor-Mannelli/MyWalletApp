import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Login from "./Routs/Login"
import Receipt from "./Routs/Receipt"
import Register from "./Routs/Register"
import Entrance from "./Routs/Entrance"
import Expense from "./Routs/Expense"
import { ToastContainer } from "react-toastify"

export default function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  )
}