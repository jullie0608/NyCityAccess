import React from 'react';
import logo from './logo.svg';
import {Link, Switch, Route} from 'react-router-dom';
import  AllCourts  from './AllCourts';

const Home = () =>{
    return (
        <div className="home"> 
 
          <h1 className="App-title">NYCity HOOPS</h1>
      
        <Link to="/allcourts" >Find Basket Ball Courts </Link>
        <Switch>
            <Route exact path="/allcourts" component={AllCourts} />
        </Switch>
        
        </div>
    )
}

export default Home;