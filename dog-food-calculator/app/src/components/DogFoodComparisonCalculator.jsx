import React, { Component } from 'react';

import './dogFoodComparisonCalculator.css';

export default class DogFoodComparisonCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBrand: 'Blue Buffalo',
      nomType: 'Porkalicious Potluck'
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log('state: ',this.state);
  }

  render() {
    return (
      <div className="calculator__container">
        <h1 className="calculator__header">Dog food comparison calculator</h1>
        <img src="https://www.nomnomnow.com/images/home/justin_square.jpg" alt="Dr. Shmalberg" className="shmalberg-photo"/>
        <p>
          <span className="text--color-teal text--bold">Dr. Shmalberg says</span>: "We should feed by calorie, not by weight. Percentages on commercial dog food labels are not reliable because they are not based on weight, and the values are affected by many factors, including moisture, fiber, and minerals."
        </p>
        <p>
          Use this calculator to get a more accurate picture of how another dog food brand compares with NomNomNow.
        </p>
        <form>
          <div className="form__row">
            <div className='form-col-2'>
              <label htmlFor="dog-food-select">Name of dog food brand</label>
              <br/>
              <select 
                name="dogBrand" 
                id="dog-food-select"
                onChange={ this.onChangeHandler }
                defaultValue={ this.state.dogBrand }
                >
                <option value="Blue Buffalo">Blue Buffalo</option>
                <option value="Purina">Purina</option>
                <option value="Taste of the Wild">Taste of the Wild</option>
              </select>
            </div>
            <div className='form-col-2'>
              <label htmlFor="nomnomnow-select">Compare with NomNomNow</label>
              <br/>
              <select 
                name="nomType" 
                id="nomnomnow-select"
                onChange={ this.onChangeHandler }
                defaultValue={ this.state.nomType }
                >
                <option value="Porkalicious Potluck">Porkalicious Potluck</option>
                <option value="Heartland Beef Mash">Heartland Beef Mash</option>
                <option value="Chicken Chow-Wow">Chicken Chow-Wow</option>
                <option value="Tasty Turkey Fare">Tasty Turkey Fare</option>
              </select>
            </div>
          </div>
          <div className="form__row">
            <span className="text--bold">{this.state.dogBrand}</span>'s nutrient info:
          </div>
          <div className="form__row">
            <div className='form-col-3'>
              <label htmlFor="protein">% protein(min.)</label>
              <input type="text" name="protein"/>
            </div>
            <div className='form-col-3'>
              <label htmlFor="fat">% fat(min.)</label>
              <input type="text" name="fat"/>
            </div>
            <div className='form-col-3'>
              <label htmlFor="caloricDensity">Caloric density (kcal/kg)</label>
              <input type="text" name="caloricDensity"/>
            </div>
          </div>
          <div className="form__divider text--color-grey">
            <div>Fill out the form to get a nutrient comparison</div>
          </div>
          {/* DIVIDER */}
          <div></div>
        </form>
      </div>
    )
  }
}
