import React, { Component } from "react";
import store from "../store";
import "../index.css";
import fetchData from "../asyncActions/fetchCountries";
import RegionFilter from "./regionFilter";
import searchInput from "../actions/searchInput";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "region/americas"
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitting = this.submitting.bind(this);
    this.inputTheme = this.inputTheme.bind(this);
  }

  changeHandler(e) {
    if (e.target.value === "") {
      store.dispatch(searchInput(""));
      store.dispatch(fetchData("region/americas"));
    } else {
      store.dispatch(fetchData(`name/${e.target.value}`));
      store.dispatch(searchInput(e.target.value));
    }
  }

  searchIconAnim() {
    let SearchIconElem = document.getElementsByClassName("searchIcon")[0];
    SearchIconElem.style.transform = "translate(12px, -4px) scale(1.3)";
    setTimeout(() => {
      SearchIconElem.style.transform = "translateX(15px)";
    }, 130);
  }

  submitting(event) {
    event.preventDefault();
    this.searchIconAnim();
  }

  inputTheme() {
    if (localStorage.theme === "dark-theme") {
      return {
        backgroundColor: store.getState().themeReducer.darkTheme.elements,
        color: store.getState().themeReducer.darkTheme.text
      };
    } else {
      return {
        backgroundColor: store.getState().themeReducer.lightTheme.elements,
        color: store.getState().themeReducer.lightTheme.text
      };
    }
  }

  searchIconTheme() {
    if (localStorage.theme === "dark-theme") {
      return store.getState().themeReducer.darkTheme.inputText;
    } else {
      return store.getState().themeReducer.lightTheme.inputText;
    }
  }

  render() {
    return (
      <form id={"form"} onSubmit={this.submitting}>
        <div style={this.inputTheme()} className={"outerInput"}>
          <svg
            onClick={this.submitting}
            fill={this.searchIconTheme()}
            className={"searchIcon"}
            viewBox={"0 0 30 30"}
          >
            <path
              xmlns={"http://www.w3.org/2000/svg"}
              d={
                "M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735   c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0   c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z    M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0   C21.517,9.026,21.517,14.63,18.073,18.074z"
              }
            ></path>
          </svg>
          <input
            style={this.inputTheme()}
            onChange={this.changeHandler}
            type={"search"}
            className={`searchInput ${localStorage.theme}`}
            placeholder={"Search for a country..."}
          ></input>
        </div>
        <RegionFilter />
      </form>
    );
  }
}

export default SearchInput;
