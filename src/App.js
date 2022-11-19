import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Login from "./Routs/Login"
import Receipt from "./Routs/Receipt"
import Register from "./Routs/Register"
import { ToastContainer } from "react-toastify"
import Transactions from "./Routs/Transactions"

export default function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/transactions/:type" element={<Transactions />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  )
}