import React from 'react';
import Homepage from './components/Homepage';
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function App() {
  return (
    < >
      
        <Router>
          <Navbar/>
            <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route path='/blog' component={Blog}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
