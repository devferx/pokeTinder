function reducer(state, action) {
  switch (action.type) {
    case "LOADED_INFO":
      return {
        ...state,
        activeBottomBar: true,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
