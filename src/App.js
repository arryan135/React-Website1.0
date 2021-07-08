import React, {Component} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home"
import BioComponent from "./BioComponent"
import ContactForm from "./ContactForm"

class App extends Component {
  render(){
    return (
        <Switch>
          <Route 
            exact 
            path = "/about"
            // render = {() => <h1>Hello from the supposed bio page</h1>}
            render = {() => <BioComponent />}
          />
          <Route 
            exact 
            path = "/contact"
            render = {() => <ContactForm />}
          />
          <Route 
            exact 
            path = "/"
            render = {() => <Home />}
          />
          <Redirect to = "/" />
        </Switch>
        // <BioComponent />
        // <Home />
        // <ContactForm />
    );
  }
}

export default App;
