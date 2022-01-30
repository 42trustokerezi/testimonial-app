import "./App.css"
import Experience from "./components/Experience/Experience";
import Exp from "./components/Exp/Exp";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Stories from "./components/Stories/Stories";
import MemorialList from "./components/Memorials/MemorialList";

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Experience/>
      <Exp/>
      <Stories/>
    </div>
  );
}

export default App;
