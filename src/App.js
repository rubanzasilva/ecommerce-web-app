import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import Shop from './pages/Shop';
import Flour from './pages/Flour';
import Cereal from './pages/Cereal';
import Fruits from './pages/Fruits'
import SignUp from './pages/Sign';
import Cart from './pages/Cart';


function App() {
    return (
        <Router>
          <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/flour' component={Flour}/>
              <Route path='/cereal' component={Cereal}/>
              <Route path='/fruits' component={Fruits}/>
              <Route path='/shop' component={Shop}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/signup' component={SignUp}/>

          </Switch>
        
        </Router>
    )
}

export default App
