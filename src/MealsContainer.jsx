import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import MealItem from './MealItem';


export default class MealsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
    const favouriteItems = this.props.favourites.map((item) => {
      return <MealItem key={item.id} {...item}/>
    })

    const ideaItems = this.props.ideas ? this.props.ideas.map((item) => {
      return <MealItem key={item.id} {...item}/>
    }) : false;

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
              {ideaItems? ideaItems : <h5>Search for ideas above</h5>}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}