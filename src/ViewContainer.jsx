import React from 'react';
import { TabContent, Card, Button, CardText, Col } from 'reactstrap';

export default class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inFavourites: false
    };
  }
  handle_addToFavourites = () => {
    this.props.addToFavourites(this.props.id)
    this.setState({ inFavourites: true })
  }

  checkRecipeStatus = () => {
    if (this.props.favourites) {
      this.props.favourites.forEach(item=>{
        if(this.props.id === item.id) {
          this.setState({ inFavourites: true })
        }
      })
    }
  }

  componentDidMount() {
    this.checkRecipeStatus()
  }

  render() {
    const Dietary = () => {
      let dietType = [];
      if (this.props.vegetarian) {
        dietType.push('Vegetarian');
      } 
      if (this.props.vegan) {
        dietType.push('Vegan');
      }
      if (this.props.glutenFree) {
        dietType.push('Gluten-Free');
      }
      if (this.props.dairyFree) {
        dietType.push('Dairy-Free');
      }
      if (dietType.length === 0) {
        return false
      } else {
        return <h6><b>Dietary:</b> {dietType.join(', ')}</h6>;
      }
    }

    const ingredients = this.props.extendedIngredients? this.props.extendedIngredients.map((item)=>{
      return <li className="ingredient-item" key={item.id}><img src={item.image} alt={item.name}/><span>{item.originalString}</span></li>
    }): false;

    const inFavourites = !this.state.inFavourites ? <Button onClick={this.handle_addToFavourites}>Add to Favourites</Button> : <h6>This recipe is in your favourites.</h6>

    return (
      <div id="recipe" className="columnContainer">
        <TabContent >
          <Col sm="11" className="recipeCard">
            <Card body>
              <h3>{this.props.title}</h3><br/>
              <img src={this.props.image} alt={this.props.image}/><br/>
              <h6><b>Servings:</b> {this.props.servings}   <b>Prep:</b> {this.props.preparationMinutes} minutes   <b>Cook:</b> {this.props.cookingMinutes} minutes</h6>
              <Dietary/>
              <br/>
              <h5>Ingredients</h5>
              <ul className="list-group">
                {ingredients? ingredients: <li>Sorry something went wrong! No ingredients were provided.</li>}
              </ul>
              <br/>
              <h5>Instructions</h5>
              <CardText>{this.props.instructions}</CardText><br/>
              {inFavourites}
            </Card>
          </Col>
        </TabContent>
      </div>
    );
  }
}