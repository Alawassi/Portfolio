import Header from './Components/Header';
import Front from './Components/Front';
import Aboutme from './Components/Aboutme';
import Education from './Components/Education';
import './App.css';
import Social from './Components/Social';
import Projects from './Components/Projects';
import Siklls from './Components/Siklls';


function App() {
  return (
    <div className="App">
    
      <Header/>
  
      <Front/>
      <Aboutme/>
      <Education/>
      <Projects/>
      <Siklls/>
      <Social />
    </div>
  );
}

export default App;
