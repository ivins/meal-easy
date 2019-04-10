import React from 'react';
import { Card, Button, Col } from 'reactstrap';

export default class MealItem extends React.Component {

  handle_viewRecipe = () => {
    this.props.updateViewRecipe(this.props.id)
  }
  handle_removeRecipe = () => {
    const check = window.confirm(`Are you sure you want to remove this recipe?`);
    if (check === true) {
      this.props.removeRecipe(this.props.id)
    }
  }

  render() {
    //this should become its own component and imported in. 
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


    return (
      <Col sm="11" className="mealCard">
        <Card body>
          <h5 className="card-title">{this.props.title}</h5>
          <img src={this.props.image} alt="food"/>
          <h6><b>Servings:</b> {this.props.servings}</h6>   
          <h6><b>Ready in:</b> {this.props.readyInMinutes} minutes</h6>
          <Dietary/>
          <div>
          <a href="#recipe"><Button color="info" onClick={this.handle_viewRecipe}>View Recipe</Button></a>
          {this.props.removeRecipe? <Button color="danger"  onClick={this.handle_removeRecipe}>Remove From Favourites</Button> : null}
          </div>
        </Card>
      </Col>
    );
  }
}