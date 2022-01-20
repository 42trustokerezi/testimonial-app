import "./App.css"
import Experience from "./components/Experience/Experience";
import Exp from "./components/Exp/Exp";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Experience/>
      <Exp/>
    </div>
  );
}

export default App;
