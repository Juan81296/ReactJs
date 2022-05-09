import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AppContextProvider from "./components/context/AppContext"
import CartContextProvider from "./components/context/CartContext"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<AppContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route
								path="/"
								element={<ItemListContainer greetings={"Tango"} />}
							/>
							<Route
								path="/category/:categoryId"
								element={<ItemListContainer greetings={"Tango"} />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
}

export default App
