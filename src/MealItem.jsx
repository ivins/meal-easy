import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

export default class MealItem extends React.Component {
  render() {
    return (
      <Col sm="11" className="mealCard">
        <Card body>
          <h5>Ramen Noodle Coleslaw</h5>
          <img src="https://spoonacular.com/recipeImages/537176-240x150.jpg" alt="food"/>
          <h6><b>Servings:</b> 8   <b>Time:</b> 15 minutes</h6>
          <h6><b>Dietary:</b> Vegetarian, Vegan, Diary-Free</h6>
          <Button>View Recipe</Button>
        </Card>
      </Col>
    );
  }
}