import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import favourites from './initialData'
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: {...favourites},
      ideas: [],
      recipe: {test:'hi'}
    }
  }

  randomQuery = (keywords) => {
    const API_KEY =`${process.env.REACT_APP_API_KEY}`
    Axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random", {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      },
      params: {
        number: '10',
        tags: 'dessert'
      }
    })
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    // this.randomQuery("hi");
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
          <ViewContainer {...this.state.recipe}/>
        </section>
      </div>
    );
  }
}

export default App;
