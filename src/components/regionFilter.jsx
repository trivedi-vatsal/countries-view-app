import React, { Component } from "react";
import "../index.css";
import store from "../store";
import fetchData from "../asyncActions/fetchCountries";

class RegionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "region/americas",
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      buttonClicked: false
    };

    this.showList = this.showList.bind(this);
    this.setRegion = this.setRegion.bind(this);
  }

  downArrowTheme() {
    if (localStorage.theme === "dark-theme") {
      return store.getState().themeReducer.darkTheme.text;
    } else {
      return store.getState().themeReducer.lightTheme.text;
    }
  }

  setRegion(e) {
    store.dispatch(fetchData(`region/${e.target.innerHTML}`));
  }

  showList() {
    let regionsCard = document.getElementById("regions-list");
    let downArrowAnimated = document.getElementById("down-arrow");

    if (!this.state.buttonClicked) {
      regionsCard.style.display = "block";
      this.setState({
        buttonClicked: true
      });

      downArrowAnimated.style.transform = "translateY(-5%)";
      setTimeout(() => {
        downArrowAnimated.style.transform = "translateY(-50%)";
      }, 200);
    } else {
      regionsCard.style.display = "none";
      this.setState({
        buttonClicked: false
      });
    }

    window.onscroll = () => {
      regionsCard.style.display = "none";
      this.setState({
        buttonClicked: false
      });
    };
  }

  btRegionTheme() {
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

  render() {
    return (
      <div onClick={this.showList} id="region-filter">
        <div id="show-regions-bt" style={this.btRegionTheme()}>
          <p>Filter by region</p>
          <svg
            id={"down-arrow"}
            xmlns={"http://www.w3.org/2000/svg"}
            viewBox={"0 0 451.847 451.847"}
          >
            <path
              d={
                "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
              }
              fill={this.downArrowTheme()}
            ></path>
          </svg>
        </div>
        <ul id={"regions-list"} style={this.btRegionTheme()}>
          {this.state.regions.map(x => {
            return (
              <li onClick={this.setRegion} key={x}>
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RegionFilter;
