import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer';
import ViewContainer from './ViewContainer';
import favourites from './initialData';
import recipe from './recipeForView';
import sampleIdeas from './sampleIdeas';
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: favourites.recipes,
      ideas: sampleIdeas.recipes,
      // ideas: [],
      viewRecipe: {}
    }
    this.randomQuery = this.randomQuery.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
    this.updateViewRecipe = this.updateViewRecipe.bind(this);
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
      this.setState({ideas: response.data.recipes})
    })
    .catch(error => {
      console.log(error);
    });
  }

  addToFavourites = (id) => {
    this.state.ideas.forEach(item=>{
      if(item.id === id) {
        return this.setState({favourites: this.state.favourites.concat(item)})
      }
    })
  }

  updateViewRecipe = (id) => {
    const recipes = [...this.state.favourites, ...this.state.ideas];
    recipes.forEach(item=>{
      if(item.id === id) {
        return this.setState({viewRecipe: item})
      }
    })
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
            favourites = {this.state.favourites}
            ideas = {this.state.ideas}
            updateViewRecipe = {this.updateViewRecipe}
          />
          <ViewContainer {...this.state.viewRecipe} addToFavourites={this.addToFavourites} favourites={this.state.favourites}/>
        </section>
      </div>
    );
  }
}

export default App;
