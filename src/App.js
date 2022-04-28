import "./App.css";
import NavBar from"./components/NavBar";
import DaisyNavBar from "./components/DaisyNavBar";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Button from "./components/Button";
import StarshipsContainer from "./components/swapi/StarshipsContainer";
import CoffeContainer from "./components/coffe/CoffeContainer";
function App() {
 const styles ={
    title:"text-3xl font-bold font-mono text-brown-200",
  }
  return (
    <div className="App" style={{backgroundColor:"#151321"}}>
      <DaisyNavBar/>
      <h1 className={styles.title}>Café</h1>
      <Saludo/>
      <Contador></Contador>
      <div>
      <Button></Button>
      </div>
      <div>
      {/*<StarshipsContainer></StarshipsContainer>*/}
      <CoffeContainer/>
      </div>
      </div>
  )
}

export default App;
