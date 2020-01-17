const INITIAL_STATE = {
  countries: {},
  querySearched: [],
  loading: true,
  error: false
};

export default function Fetcher(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return {
        ...state,
        countries: [...action.countries],
        loading: false,
        error: false
      };
    case "ERROR_FETCHING":
      return { ...state, error: action.err };
    case "QUERY_SEARCHED":
      return { ...state, querySearched: action.query, error: false };
    default:
      return state;
  }
}
