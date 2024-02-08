import shortid from 'shortid';

export const getAllLists = (state => state.lists);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find(lists => lists.id === listId);
export const addList = payload => ({ type: 'ADD_LIST', payload });

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_LIST':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }
  export default listsReducer;