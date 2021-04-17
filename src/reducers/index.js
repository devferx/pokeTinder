function reducer(state, action) {
  switch (action.type) {
    case "LOADED_INFO":
      return {
        ...state,
        activeBottomBar: true,
        loading: false,
      };
    case "OPEN_CARD":
      return {
        ...state,
        cardIsOpen: true,
      };
    case "CLOSE_CARD":
      return {
        ...state,
        cardIsOpen: false,
      };
    default:
      return state;
  }
}

export default reducer;
