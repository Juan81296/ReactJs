import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/cart/Cart"
import AppContextProvider from "./components/context/AppContext"
import CartContextProvider from "./components/context/CartContext"
import ProductDetail from "./components/firebase-examples/ProductDetail"
import Products from "./components/firebase-examples/Products"
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
							<Route path="/cart" element={<Cart/>} />
							<Route path="/producto" element={<ProductDetail/>} />
							<Route path="/productos" element={<Products/>} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
		</>
	)
}

export default App