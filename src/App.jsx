import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import favourites from './initialData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: {...favourites},
      ideas: {...favourites}
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Meal Easy</h1>
          {/* <p>{this.state.favourites.recipes[0].title}</p> */}
        </nav>
        <section>
          <MealsContainer 
            favourites={this.state.favourites.recipes}
            ideas={this.state.ideas.recipes}
          />
          <ViewContainer />
        </section>
      </div>
    );
  }
}

export default App;
