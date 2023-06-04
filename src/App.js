import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ResumeSection from './components/ResumeSection';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div className="App">
           <Home/>
           <ResumeSection/>
           <Portfolio/>
    </div>
  );

}
export default App;
