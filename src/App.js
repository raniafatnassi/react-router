import React, {Component} from "react";

import {Link, Route, Switch, Redirect} from 'react-router-dom';

import Category from './Category';
import Products from './Products';
import Login  from './Login';
import fakeAuth  from './Login';


const Home =()=>(
  <div>
    <h2>Home</h2>
  </div>
)

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

const App = () => {
  return(
    <div>
      <nav>
        <ul>

        /* Link components are used for linking to other views */
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/products'>Products</Link></li>

        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />
      </Switch>

    </div>
  )
}

export default App
