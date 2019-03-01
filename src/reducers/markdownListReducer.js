import { CREATE_MARKDOWN, DELETE_MARKDOWN } from '../actions/markdownListActions';
const initialState = {
  markdownList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MARKDOWN:
      return {
        markdownList: [...state.markdownList, action.payload]
      };
    case DELETE_MARKDOWN: 
      return {
        markdownList: state.markdownList.filter(obj => obj.id !== action.payload)
      };
    default:
      return state;
  }
}
