export const fetchAction = countries => {
  return {
    type: "FETCH_COUNTRIES",
    countries
  };
};

export const fetchByQuery = query => {
  return {
    type: "QUERY_SEARCHED",
    query
  };
};

export const fetchErrorAction = err => {
  return {
    type: "ERROR_FETCHING",
    err
  };
};

export default { fetchAction, fetchErrorAction, fetchByQuery };
