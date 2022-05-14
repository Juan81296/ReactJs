import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/cart/Cart"
import AppContextProvider from "./components/context/AppContext"
import { CartProvider } from "./components/context/CartContext"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<AppContextProvider>
				<CartProvider>
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
							<Route path="/cart" element={<Cart/>} />

						</Routes>
					</BrowserRouter>
				</CartProvider>
			</AppContextProvider>
		</>
	)
}

export default App
