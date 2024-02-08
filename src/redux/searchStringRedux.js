
export const getSearchString = (state => state.searchString);

export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING',payload});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;