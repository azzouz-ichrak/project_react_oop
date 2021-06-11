import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Adverts from "./components/adverts/Adverts";
import Advert from "./components/adverts/Advert";
import Add_Advert from "./components/adverts/add_Advert";
import Profil from "./components/users/profil";
import Login from "./components/users/login";
import Signup from "./components/users/signup";
import Categories from "./components/categories/Categories";
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Link className="App-link" to="/">Home</Link>
        <Link className="App-link" to="/adverts">Adverts</Link>
        <Link className="App-link" to="/categories">Categories</Link>
        <Link className="App-link" to="/Profil">Profil</Link>
        <Link className="App-link" to="/Login">Login</Link>
        <Link className="App-link" to="/Signup">Signup</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/Profil" component={Profil}/>
        <Route exact path="/adverts"component={Adverts}/>
        <Route exact path='/adverts/Add_Advert' component={Add_Advert}/>
        <Route exact path='/adverts/:id' component={Advert}/>
        
      </Switch>
    </Router>
  )
}

export default App;
