
import './App.css';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
       <Home/>
      <About/>
     <Services/> 
     <Contact/>
    </div>
  );
}

export default App;
