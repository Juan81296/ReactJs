import logo from "./logo.svg";
import "./App.css";
import NavBar from"./components/NavBar";
import DaisyNavBar from "./components/DaisyNavBar";

function App() {
  const styles ={
    title:"text-3xl font-bold font-mono text-blue-400"
  }
  return (
    <div className="App">
      <DaisyNavBar/>
      <NavBar/>
      <h1 className={styles.title}>¡Hola mundo con React!</h1>
    </div>
  );
}

export default App;
