import React, { Component } from 'react';
import { render } from 'react-dom';

class DogFoodComparisonCalculator extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div> Welcome to the Application </div>
    )
  }
}

render(
  <DogFoodComparisonCalculator/>,
  document.getElementById('root')
);