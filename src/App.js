import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import  Roadmap from './components/Roadmap'
import Populatediv from './components/Populatediv';
import About from './components/About';
import './App.css';

function App() {

  setTimeout(()=>{
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(vw < 1000){
      let roadmap = document.getElementById('roadmap').style;
      roadmap.display = "none";
      let populate = document.getElementById("Populate").style;
      populate.display = "block"
    }
    else{
      let roadmap = document.getElementById('roadmap').style;
      roadmap.display = "block";
      let populate = document.getElementById("Populate").style;
      populate.display = "none"
    }
  },10)
  
  return (
    <div className='app'>
      <header>
      <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <About/>
      <Populatediv />
      <Roadmap/>

      <Footer />
    </div>
  );
}

export default App;
