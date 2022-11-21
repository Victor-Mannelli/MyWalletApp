import GlobalStyle from "./GlobalStyle";
import Login from "./Routs/Login";
import Receipt from "./Routs/Receipt";
import Register from "./Routs/Register";
import Transactions from "./Routs/Transactions";
import PageTheme from "./PageTheme";
import UserContext from "./UserContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ErrorTreatment from "./ErrorTreatment";

export default function App() {
	const [pageTheme, setPageTheme] = useState(false);
	const [token, setToken] = useState(
		localStorage.getItem("token") !== null ? localStorage.getItem("token") : ""
	);

	return (
		<UserContext.Provider
			value={{
				token,
				setToken,
			}}
		>
			<BrowserRouter>
				<PageTheme pageTheme={pageTheme} setPageTheme={setPageTheme} />
				<Routes>
					<Route path="/" element={<Login pageTheme={pageTheme} />} />
					<Route
						path="/registration"
						element={<Register pageTheme={pageTheme} />}
					/>
					<Route path="/receipt" element={<Receipt pageTheme={pageTheme} />} />
					<Route
						path="/transactions/:type"
						element={<Transactions pageTheme={pageTheme} />}
					/>
					<Route path="*" element={ <ErrorTreatment pageTheme={pageTheme} />} />
				</Routes>
				<GlobalStyle />
				<ToastContainer />
			</BrowserRouter>
		</UserContext.Provider>
	);
}
