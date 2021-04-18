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
    case "NEXT_CARD":
      if (state.currentCard + 1 >= state.pokemonsCards.length) {
        return {
          ...state,
          currentCard: 0,
        };
      } else {
        return {
          ...state,
          currentCard: state.currentCard + 1,
        };
      }
    default:
      return state;
  }
}

export default reducer;
