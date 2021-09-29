import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Functional from './components/contactComponet/Functional';
import Quill from '../src/components/Quill';
import Home from './components/Home';




class App extends Component {

  render() {

    return (
      <div>

        <Router>

          <Route exact path="/" component={Home} />
          <Route exact path="/ckeditor" component={Functional} />
          <Route exact path="/quill" component={Quill} />

        </Router>

      </div>
    );

  }
}

export default App;
