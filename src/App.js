import React,{ Component } from 'react';
import MenuHome from './components/MenuHome';
import Weather from "./components/Weather";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
class App extends Component {
  render = () =>{
    return(
    <BrowserRouter>
      <div id="container">
          <Switch>
            <React.Fragment>
              <Route exact path="/" component={MenuHome}/>
              <Route path="/tiempo">
                <Weather />
              </Route>
            </React.Fragment>
          </Switch>  
      </div>
    </BrowserRouter>
    );
  }
}
export default App;