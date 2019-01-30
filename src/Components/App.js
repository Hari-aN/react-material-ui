import React, { Component } from 'react'
import './../App.css'
import { Header, Footer } from '../Layouts'
import MineWork from './MineWork';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MineWork />
        <Footer />
      </div>
    );
  }
}

export default App;
