import "./App.scss";
import Header from "./components/header/Header";
import Laminates from "./components/main/Laminates";
import About from "./components/main/About";
import Quality from "./components/main/Quality";
import Our from "./components/main/Our";
import Information from "./components/main/Information";
import Team from "./components/main/Team";
import News from "./components/main/News";
import Footer from "./components/footer/Footer";
import { BackTop } from "antd";

function App() {
  return (
    <div>
      <Header />

      <Laminates />
      <About />
      <Quality />
      <Our />
      <Information />
      <Team />
      <News />
      <div>
        <BackTop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
