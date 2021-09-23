
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About.js';
import Services from './pages/Services';
import Art from './pages/Art';
import Astro from './pages/Astro';
import Addict from './pages/Addict';
import Contact from './pages/Contact';
import Navigation from './components/nav/index.js'

function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
      <Switch>
        
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/art" component={Art} />
        <Route path="/astro" exact component={Astro} />
        <Route path="/addict" exact component={Addict} />
        <Route path="/contact" component={Contact} />
        
      </Switch>

    </BrowserRouter>
  );
}

export default App;
