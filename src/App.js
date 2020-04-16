import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
// Profile





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/home' render={ (props) => <Home {...props} />}/>

            <Route exact path='/signup' component={Signup}/>

            <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
