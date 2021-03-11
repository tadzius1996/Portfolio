import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeGrid } from "./components/HomeGrid";
import { Footer } from "./components/Footer";
import {Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <h1 data-aos='fade-in' className='title'>Stand out <img className='logo' src='/Asterisk.png'/><br/> from the crowd.</h1>
      <div className='container'>
      <Switch>
        <HomeGrid />
      </Switch>
      <h1 data-aos='fade-in' className='after'>Together is a full-service agency that <br/> builds products, brands and websites <br/> with ambitious tech companies.</h1>
      <div className='buttonDiv'>
       <Link to='/about'><a data-aos='fade-in' className='button'>More about us</a></Link>
    </div>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

