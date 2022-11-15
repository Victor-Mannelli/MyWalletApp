import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Login from "./Routs/Login"
import ReceiptPage from "./Routs/Receipt"
import Register from "./Routs/Register"

export default function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}