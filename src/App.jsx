import React, { Component } from 'react';
import './styles/App.css';
import MealsContainer from './MealsContainer'
import ViewContainer from './ViewContainer'
import initialData from './initialData'
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialData
    }
  }

  onDragEnd = result => {
    // Coming back here to handle state changes
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Meal Easy</h1>
          <p>{this.state.initialData.columns['column-1'].mealIds}</p>
        </nav>
        <section>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <MealsContainer />
            <ViewContainer />
          </DragDropContext>
        </section>
      </div>
    );
  }
}

export default App;
