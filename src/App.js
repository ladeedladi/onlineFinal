import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import ViewPost from './Pages/ViewPost';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Create from './Pages/Create'
import PostedContext from './Postcontext';
function App() {
  return (
    <div>
      <PostedContext>
      <Route exact path='/'>
      <Link to='/Signup'>signup</Link>
      <Home />
      
      </Route>
      <Route exact path='/Signup'>
      <Signup />
      </Route>
      <Route exact path='/login'>
       <Login/>
      </Route>
      <Route exact path='/create'>
      <Create />
      </Route>
      <Route exact path='/view'>
      <ViewPost/>
      </Route>
      </PostedContext>
    </div>
  );
}

export default App;
