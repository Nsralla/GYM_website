import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans.jsx';
import Programss from './components/Programss/Programss.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
        <Hero/>  
        <Programss/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
