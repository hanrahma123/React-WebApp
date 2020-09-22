import React from 'react';
//import logo from './logo.svg';
import './Style/App.css';
import Background from './components/background';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import about from './pages/about';
import login from './pages/login';
import NavbarLeft from './components/navbar_left';
// import Spinner from 'react-bootstrap/Spinner';
// import PageLoader from './components/pageLoader';
// import {ReactComponent as ArrowIcon } from './icons/arrow.svg'


function App() {
  return (
    
    <Router>
      
      <div className="App">

      <Route exact path="/" render={props => (
      
        <React.Fragment>
          <div className="flexbox0">
          
          <NavbarLeft/>
          <div className='flexbox1'>
          <Navbar/>
              {/* <div className='background'>
                <Background/>
                
              </div> */}
              
              <div className='flexbox2'> 

                <h4 className="welcometxt">Welcome User</h4>
                {/* <ArrowIcon className="chart"/> */}
                <div className="flexdata">
                  <img src= 'https://www.betterevaluation.org/sites/default/files/styles/feature_image/public/piechart_0.gif?itok=l0_8fFn1' alt="" className="pichart"/>
                  <img src= 'https://images.pond5.com/2d-bar-chart-black-background-footage-105279605_iconl.jpeg' alt="" className="barchart"/>
                </div>
                  <div className='flexbox3'>
                  <h4 className="welcometxt">Welcome User</h4>
                  <h4 className="welcometxt">Welcome User</h4>
                  <h4 className="welcometxt">Welcome User</h4>
                  <h4 className="welcometxt">Welcome User</h4>
                  <h4 className="welcometxt">Welcome User</h4>
                  <h4 className="welcometxt">Welcome User</h4>
                            
                </div>
                
              </div>
          </div>
          </div>
        </React.Fragment>
        )}
      />
      <Route path="/about" component={about}/> 
      <Route path="/login" component={login}/> 
      </div>
    </Router>
  );
}

export default App;
