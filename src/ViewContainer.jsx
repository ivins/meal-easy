import React from 'react';
import { TabContent, Card, Button, CardText, Col } from 'reactstrap';

export default class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="columnContainer">
        <TabContent >
          <Col sm="11" className="recipeCard">
            <Card body>
              <h3>Ramen Noodle Coleslaw</h3><br/>
              <h6><b>Servings:</b> 8   <b>Prep:</b> 5 minutes   <b>Cook:</b> 10 minutes</h6>
              <h6><b>Dietary:</b> Vegetarian, Vegan, Diary-Free</h6>
              <br/>
              <h5>Ingredients</h5>
              <ul className="list-group">
                <li className="list-group-item"><img src="https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg" alt="almonds"/>¼ cup sliced almonds</li>
                <li className="list-group-item"><img src="https://spoonacular.com/cdn/ingredients_100x100/coleslaw.png" alt="almonds"/>1 bag shredded cabbage/coleslaw mix</li>
                <li className="list-group-item"><img src="https://spoonacular.com/cdn/ingredients_100x100/cream-of-chicken-soup.jpg" alt="almonds"/>1 package chicken flavor ramen noodle soup</li>
              </ul>
              <br/>
              <h5>Instructions</h5>
              <CardText>Toast the sesame seeds, about 350 degrees in the oven for about 10-15 minutes. Keep an eye on them to make sure they don't burn.Mix together the following to make the dressing: olive oil, vinegar, sugar, salt, pepper, green onions, chicken flavor packet from the ramen noodle package.Crush the ramen noodles until there are no large chunks (small chunks are OK).Combine the shredded cabbage and ramen noodles in a large bowl.Pour the dressing on the cabbage/noodle mixture and toss to coat.Top with the toasted sesame seeds and almonds.</CardText><br/>
              
              <Button>Add to My Favourites</Button>
            </Card>
          </Col>
        </TabContent>
      </div>
    );
  }
}