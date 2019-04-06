import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MealItem from './MealItem';


export default class MealsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="columnContainer">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <b>My Favourites</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <b>Need Ideas?</b>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>

              <MealItem/>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="11" className="mealCard">
                <Card body>
                  <h5>Ramen Noodle Coleslaw</h5>
                  <img src="https://spoonacular.com/recipeImages/537176-240x150.jpg" alt="food"/>
                  <h6><b>Servings:</b> 8   <b>Time:</b> 15 minutes</h6>
                  <h6><b>Dietary:</b> Vegetarian, Vegan, Diary-Free</h6>
                  <Button>View Recipe</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}