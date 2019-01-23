import React, { Component } from 'react';

import Results from './Results.jsx'

import './main.css';

let timeout = null;

export default class DogFoodComparisonCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBrand: 'Dog Brand',
      nomType: 'Porkalicious Potluck',
      protein: 0,
      fat: 0,
      caloricDensity: 0,
      showResults: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (this.validateInputs()) {
      this.setState({ showResults: true });
    } else {
      this.setState({ showResults: false })
    }
  }

  validateInputs() {
    let validP = this.state.protein > 0 && this.state.protein <=60;
    let validF = this.state.fat > 0 && this.state.fat <= 60;
    let validCD = this.state.caloricDensity >= 200 && this.state.caloricDensity <= 8000
    return validP && validF && validCD && this.state.dogBrand !== 'Dog Brand';
  }

  render() {

    const { dogBrand, nomType, protein, fat, caloricDensity, showResults } = this.state;

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
                onChange={this.onChangeHandler}
                defaultValue={ dogBrand }
                >
                <option value="Dog Brand">-- choose one --</option>
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
                onChange={this.onChangeHandler}
                defaultValue={ nomType }
                >
                <option value="Porkalicious Potluck">Porkalicious Potluck</option>
                <option value="Heartland Beef Mash">Heartland Beef Mash</option>
                <option value="Chicken Chow-Wow">Chicken Chow-Wow</option>
                <option value="Tasty Turkey Fare">Tasty Turkey Fare</option>
              </select>
            </div>
          </div>
          <div className="form__row">
            <span className="text--bold">{dogBrand}</span>'s nutrient info:
          </div>
          <div className="form__row">
            <div className='form-col-3'>
              <label htmlFor="protein">% protein (min.)</label>
              <input 
                name="protein" 
                type="number"
                min="1"
                max="60"
                value={protein} 
                onChange={this.onChangeHandler}
                />
            </div>
            <div className='form-col-3'>
              <label htmlFor="fat">% fat (min.)</label>
              <input 
                name="fat" 
                type="number" 
                min="1"
                max="60"
                value={fat} 
                onChange={this.onChangeHandler}
                />
            </div>
            <div className='form-col-3'>
              <label htmlFor="caloricDensity">Caloric density (kcal/kg)</label>
              <input 
                name="caloricDensity" 
                type="number" 
                min="200"
                max="8000"
                value={caloricDensity} 
                onChange={this.onChangeHandler}
                />
            </div>
          </div>
          <Results 
            dogBrand={dogBrand}
            nomType={nomType}
            protein={Number(protein)}
            fat={Number(fat)}
            caloricDensity={Number(caloricDensity)}
            showResults={showResults}
          />
        </form>
      </div>
    )
  }
}
