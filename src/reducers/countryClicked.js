const INITIAL_STATE = {
  index: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUNTRY_INDEX":
      return { ...action.index };
    default:
      return state;
  }
}
