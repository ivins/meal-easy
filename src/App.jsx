import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Meal Easy</h1>
        </nav>
        <section>
        <MealsContainer />
        <ViewContainer />
        </section>
      </div>
    );
  }
}

export default App;
