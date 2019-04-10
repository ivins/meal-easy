import React from 'react';
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, 
  Row, Button, Card, Col, FormGroup, Input, Form 
} from 'reactstrap';
import classnames from 'classnames';
import MealItem from './MealItem';


export default class MealsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const query = event.currentTarget.query.value;
    this.props.randomQuery(query);
  }

  render() {
    const favouriteItems = this.props.favourites ? this.props.favourites.map((item, index) => {
      return <MealItem key={item.id*7+index} {...item} updateViewRecipe={this.props.updateViewRecipe} removeRecipe={this.props.removeRecipe}/>
    }) : false;

    const ideaItems = this.props.ideas.length > 0 ? this.props.ideas.map((item, index) => {
      return <MealItem key={item.id*7+index} {...item} updateViewRecipe={this.props.updateViewRecipe}/>
    }) : false;

    const SearchInstruction = () => {
      return (
        <Col sm="11" >
          <Card body>
          <h5 className="search-instruction">Search for Recipe Ideas Below</h5>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="new-ideas" >
              <Input type="text" name="query" placeholder="Vegan, dessert, etc..." />
              <Button type="submit">Search</Button>
            </FormGroup>
          </Form>
          </Card>
        </Col>
      )
    }

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
              {favouriteItems}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <SearchInstruction/>
              {ideaItems}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}