import "./App.css";
import NavBar from"./components/NavBar";
import DaisyNavBar from "./components/DaisyNavBar";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Button from "./components/Button";
import StarshipsContainer from "./components/swapi/StarshipsContainer";
import CoffeContainer from "./components/coffe/CoffeContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipsDetail from "./components/swapi/StarshipsDetail";
import CoffeDetail from "./components/coffe/CoffeDetail";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#151321"}}>
    <BrowserRouter>
    <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<CoffeContainer/>}></Route>
          <Route path="/contador" element={<Contador/>}></Route>
          <Route path="/coffe/:coffeId" element={<CoffeDetail/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>


    //<div className="App" style={{backgroundColor:"#151321"}}>
      //<DaisyNavBar/>
      //<h1 className={styles.title}>Café</h1>
      //<Saludo/>
      //<Contador></Contador>
      //<div>
      //<Button></Button>
      //</div>
      //<div>
      //{/*<StarshipsContainer></StarshipsContainer>*/}
     // <CoffeContainer/>
      //</div>
      //</div>
  )
}

export default App;
