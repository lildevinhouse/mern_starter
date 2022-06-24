import React, {useLayoutEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Import Components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const SomeComponent = () => <h2>SomeComponent</h2>;

function App(actions) {

  useLayoutEffect(() => {
    actions.fetchUser();
    actions.fetchData();
  }, []);

  return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/somecomp" component={SomeComponent} />
          </div>
        </BrowserRouter>
      </div>
  )
}

export default connect(null, actions)(App)
