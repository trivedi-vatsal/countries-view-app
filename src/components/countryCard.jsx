import React, { Component } from "react";
import store from "../store";
import "../index.css";
import { Link } from "react-router-dom";

class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    this.key = 0;
    this.generateKey = this.generateKey.bind(this);
  }

  generateKey() {
    this.key++;
  }

  numberWithCommas(x) {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return null;
  }

  cardBackground() {
    if (localStorage.theme === "dark-theme") {
      return {
        backgroundColor: store.getState().themeReducer.darkTheme.elements
      };
    } else {
      return {
        backgroundColor: store.getState().themeReducer.lightTheme.elements
      };
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        countries: 1 + 1
      });
    });
  }

  render() {
    if (store.getState().fetcher.loading) {
      return (
        <div id="loading">
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      );
    } else if (store.getState().fetcher.error) {
      return (
        <div className={"nothingFound"}>
          <h3>
            <strong>
              We couldn't find a country named{" "}
              {store.getState().countrySearched.search}. Try another one.
            </strong>
          </h3>
        </div>
      );
    } else {
      return (
        <div id="cards">
          {store.getState().fetcher.querySearched.map(country => {
            return (
              <Link
                key={country.name + "link"}
                to={`/${
                  country.name
                }/${store.getState().fetcher.querySearched.indexOf(country)}`}
              >
                <div
                  style={this.cardBackground()}
                  className="card"
                  id={`card-${country.alpha3Code}`}
                  key={this.generateKey()}
                >
                  <img
                    key={this.generateKey()}
                    className={"flags"}
                    src={country.flag}
                    alt={"flag"}
                  />
                  <h1 className={"country-name"} key={this.generateKey()}>
                    {country.name}
                  </h1>
                  <ul key={this.generateKey()} className={"countries-details"}>
                    <li key={this.generateKey()}>
                      <span key={this.generateKey()}>Population:</span>{" "}
                      {this.numberWithCommas(country.population)}
                    </li>
                    <li key={this.generateKey()}>
                      <span key={this.generateKey()}>Region:</span>{" "}
                      {country.region}
                    </li>
                    <li key={this.generateKey()}>
                      <span key={this.generateKey()}>Capital:</span>{" "}
                      {country.capital}
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      );
    }
  }
}

export default CountryCards;
