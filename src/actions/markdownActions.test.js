import { updateMarkdown, UPDATE_MARKDOWN } from './markdownActions';


describe('test markdown actions', () => {
  it('updates a markdown file', () => {
    const action  = updateMarkdown('something');

    expect(action).toEqual({ 
      type: UPDATE_MARKDOWN,
      payload: 'something' 
    });
  });
});
