import { CREATE_MARKDOWN } from '../actions/markdownActions';

const initialState = {
  markdown: '# Hi there'
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MARKDOWN:
      return {
        markdown: [...state.markdown, 'markdown string']
      };
    default: 
      return state;
  }
}
