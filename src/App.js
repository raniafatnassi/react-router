import React, {useState} from "react";

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

const Admin = () => (
  <div>
    <h2>Welcome Rania</h2>
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
  const [auth, setAuth] = useState(false);
  const user = (x) => setAuth(x);
  return(
    <div>
      <nav>
        <ul>

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/admin'>Admin Area</Link></li>

        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category}/>
        <Route path='/products' component={Products} />
        <Route
          path="/login"
          render={(props) => <Login auth={user} {...props} />}
        />
        <PrivateRoute authed={auth} path="/admin" component={Admin} />
      </Switch>

    </div>
  )
}

export default App
