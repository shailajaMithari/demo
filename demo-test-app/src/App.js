import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Series from './Series/Series';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
      </Switch>
      <Footer />
    </>
  )
 
};

export default App;