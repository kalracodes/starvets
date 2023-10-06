import './App.css';
import Navbar from './components/Navbar';
import FirstDiv from './components/landingpage/firstDiv';
import SecondDiv from './components/landingpage/secondDiv';
import ThirdDiv from './components/landingpage/thirdDiv';
import FourthDiv from './components/landingpage/FourthDiv';
import FifthDiv from './components/landingpage/FifthDiv';
import SixthDiv from './components/landingpage/SixthDiv';
import Rabbit from './components/animals/rabbit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstDiv/>
      <SecondDiv/>
      <ThirdDiv/>
      <FourthDiv/>
      <FifthDiv/>
      <SixthDiv/>
      <Rabbit/>
    </div>
  );
}

export default App;
