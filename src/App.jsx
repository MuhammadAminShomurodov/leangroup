import "./App.scss";
import Header from "./components/header/Header";
import Laminates from "./components/main/Laminates";
import About from "./components/main/About";
import Quality from "./components/main/Quality";

function App() {
  return (
    <div>
      <Header />
      <Laminates />
      <About />
      <Quality />
    </div>
  );
}

export default App;
