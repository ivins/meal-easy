import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import favourites from './initialData'
import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: {...favourites},
      ideas: {...favourites}
    }
  }

  randomQuery = (keywords) => {
    const API_KEY =`${process.env.REACT_APP_API_KEY}`
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=vegetarian%2Cdessert", {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": API_KEY
    })
    .then(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  }

  componentDidMount() {
    this.randomQuery("hi");
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Meal Easy</h1>
        </nav>
        <section >
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
