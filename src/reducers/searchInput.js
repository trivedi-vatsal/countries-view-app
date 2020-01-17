const INITIAL_STATE = {
  search: ""
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUNTRY_SEARCHED":
      return { search: action.search };
    default:
      return state;
  }
}
