import axios from "axios";
import {
  fetchAction,
  fetchErrorAction,
  fetchByQuery
} from "../actions/fetchCountries";

const fetchData = query => {
  return function(dispatch) {
    axios
      .get(`https://restcountries.eu/rest/v2/${query}`)
      .then(response => {
        const countries = response.data;
        if (query !== "all") {
          dispatch(fetchByQuery(countries));
        } else {
          dispatch(fetchAction(countries));
        }
      })
      .catch(err => {
        dispatch(fetchErrorAction(err));
      });
  };
};

export default fetchData;
