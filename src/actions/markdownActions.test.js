import { updateMarkdown, UPDATE_MARKDOWN } from './markdownActions';


describe('markdown actions tests', () => {
  it('creates an action that updates a markdown file', () => {
    const action  = updateMarkdown('something');

    expect(action).toEqual({ 
      type: UPDATE_MARKDOWN,
      payload: 'something' 
    });
  });
});
