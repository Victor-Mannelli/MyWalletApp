import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Login from "./Routs/Login"

export default function App() {
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}