import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

export default class MealItem extends React.Component {
  render() {
    return (
      <Col sm="11" className="mealCard">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    );
  }
}