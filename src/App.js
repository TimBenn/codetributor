import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes/Routes'

import 'normalize.css'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header isLoggedIn={false}/>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
