import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import favourites from './initialData'
import unirest from 'unirest';
import Axios from 'axios';

// console.log(process.env.REACT_APP_API_KEY)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: {...favourites},
      ideas: []
    }
  }

  randomQuery = (keywords) => {
    const API_KEY =`${process.env.REACT_APP_API_KEY}`
    // unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3")
    // .header("Content-Type", "application/json")
    // .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    // .header("X-RapidAPI-Key", API_KEY)
    // .end(function (result) {
    //   console.log('status',result.status)
    //   console.log('headers', result.headers) 
    //   // result.body? this.setState({ideas: result.body}) : console.log('Request Failed);
    // });
    Axios.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3", {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
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
