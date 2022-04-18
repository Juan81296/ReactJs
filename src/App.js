import logo from "./logo.svg";
import "./App.css";
import NavBar from"./components/NavBar";
import DaisyNavBar from "./components/DaisyNavBar";
import Saludo from "./components/Saludo";
import Card from "./components/Card";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const styles ={
    title:"text-3xl font-bold font-mono text-blue-400"
  }
  return (
    <div className="App">
      <DaisyNavBar/>
      <NavBar/>
      <h1 className={styles.title}>¡Hola mundo con React!</h1>
      <Saludo name="Juan" edad="25"/>
      <Card>
      <Saludo name="Lucia" edad="25"/>
      </Card>
      <ItemListContainer/>
    </div>
  )
}

export default App;
