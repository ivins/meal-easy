import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import initialData from './initialData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialData
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Meal Easy</h1>
          {/* <p>{this.state.initialData.columns['column-1'].mealIds}</p> */}
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
