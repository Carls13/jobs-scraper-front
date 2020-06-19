import React, { Fragment } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Index } from './pages/Index/Index';
import { Results } from './pages/Results/Results';
import { About } from './pages/About/About';

import { Router } from '@reach/router';

import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <Header/>
      <Router>
      	<Index path="/"/>
        <About path="/about"/>
      	<Results path="/results/:query"/>
      </Router>
      <Footer/>
    </Fragment>
  );
}

export default App;
