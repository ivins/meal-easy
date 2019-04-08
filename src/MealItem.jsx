import React from 'react';
import { Card, Button, Col } from 'reactstrap';

export default class MealItem extends React.Component {
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
      return dietType.join();
    }
    return (
      <Col sm="11" className="mealCard">
        <Card body>
          <h5>{this.props.title}</h5>
          <img src={this.props.image} alt="food"/>
          <h6><b>Servings:</b> {this.props.servings}</h6>   
          <h6><b>Ready in:</b> {this.props.readyInMinutes} minutes</h6>
          <h6><b>Dietary:</b> <Dietary/></h6>
          <Button>View Recipe</Button>
          <h6>{this.props.id}</h6>
        </Card>
      </Col>
    );
  }
}