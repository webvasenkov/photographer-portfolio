import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle, Navbar } from './components';
import { AboutUs, OurWork, ContactUs, MovieDetail } from './pages';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <AboutUs />
        </Route>
        <Route exact path='/work'>
          <OurWork />
        </Route>
        <Route path='/work/:id'>
          <MovieDetail />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
