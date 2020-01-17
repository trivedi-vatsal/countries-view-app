import { combineReducers } from "redux";
import themeReducer from "./themingReducer";
import fetcher from "./fetcher";
import countryIndex from "./countryClicked";
import countrySearched from "./searchInput";

export default combineReducers({
  themeReducer,
  fetcher,
  countryIndex,
  countrySearched
});
