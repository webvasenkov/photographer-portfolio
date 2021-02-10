import React, { useState } from 'react';
import { movieState } from './movieState';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import { GlobalStyle, Navbar } from './components';
import { AboutUs, OurWork, ContactUs, MovieDetail } from './pages';

function App() {
  const [movies, setMovies] = useState(movieState());
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route exact path='/work'>
            <OurWork movies={movies} />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail movies={movies} />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
