import React, { Component } from 'react';

import './main.css';

const nomData = {
  "Porkalicious Potluck": {
    protein: 78,
    fat: 63,
    carb: 56
  },
  "Heartland Beef Mash": {
    protein: 80,
    fat: 62,
    carb: 55
  },
  "Chicken Chow-Wow": {
    protein: 115,
    fat: 58,
    carb: 31
  },
  "Tasty Turkey Fare": {
    protein: 96,
    fat: 46,
    carb: 78
  }
}

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let {  dogBrand, nomType, protein, fat, caloricDensity, showResults } = this.props;

    let dogBrandProtein = Math.round((protein + 1.5) / (caloricDensity/ 10000));
    let dogBrandFat = Math.round((fat + 1) / (caloricDensity/10000));
    let dogBrandCarbohydrate = Math.round((1000 - (dogBrandProtein * 3.5) - (dogBrandFat * 8.5))/3.5);

    if (dogBrandCarbohydrate < 0) dogBrandCarbohydrate = 0;

    if (showResults) {
      return (
        <div>
          <div className="form__divider text--color-grey">
            <div>See the nutrient comparison below</div>
          </div>
          <div className="results__container" >
            <div className="form__row">
              <div className="results__left">
                <h3 className="brand text--color-grey">{dogBrand}</h3>
                <h4 className="results__label text--color-grey">Protein</h4>
                <h1 className="results__number text--color-grey">{dogBrandProtein}</h1>
                <h4 className="results__label text--color-grey">Fat</h4>
                <h1 className="results__number text--color-grey">{dogBrandFat}</h1>
                <h4 className="results__label text--color-grey">Carbohydrate</h4>
                <h1 className="results__number text--color-grey">{dogBrandCarbohydrate}</h1>
              </div>
              <div className="results__right">
                <img src="https://www.nomnomnow.com/images/logo_utensils.svg" alt="NomNomNow logo" className="logo" />
                <h3 className="brand text--color-grey">{nomType}</h3>
                <h4 className="results__label text--color-grey">Protein *</h4>
                <h1 className="results__number text--color-orange">{nomData[nomType].protein}</h1>
                <h4 className="results__label text--color-grey">Fat</h4>
                <h1 className="results__number text--color-teal">{nomData[nomType].fat}</h1>
                <h4 className="results__label text--color-grey">Carbohydrate</h4>
                <h1 className="results__number text--color-yellow">{nomData[nomType].carb}</h1>
              </div>
            </div>
            <div className="form__row results__footer">
              Learn about<a className="results__footer-link text--color-orange" href="#">the role of protein, fat, and carbs </a>
              in a dog's diet.
            </div>
            <div className="form__row results__disclaimer text--color-grey">
              * All units above are given in grams per 1000 calories (g/kcal)
            </div>
          </div>
          <div className="results__disclaimer text--color-grey">
            The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. NomNomNow is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.
          </div>
          <div className="results__cta">
            <h2 className="cta">Ready to go fresh?</h2>
            <a className="cta__link" href="#">Let's get started</a>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form__divider text--color-grey">
          <div>Fill out the form to get a nutrient comparison</div>
        </div>
      )
    }
  }
}
