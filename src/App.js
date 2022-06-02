import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import{useState} from 'react'


function App() {

  // Make react state
var [currentPage, setCurrentPage] = useState("About");
function renderPage(){
  if (currentPage === "About"){
    return <About/>
  }
  else if (currentPage === "Projects"){
    return <Projects/>
  }
  else if (currentPage === "Resume"){
    return <Resume/>
  }
  else if (currentPage === "Contact"){
    return <Contact/>
  }
}

  return (
    <div className="App">
     
<Header setCurrentPage={setCurrentPage}/>


<section class="hero">
</section>


<section class="content">

  {renderPage() }
    

    
</section>


<Footer/>

    </div>
  );
}

export default App;
