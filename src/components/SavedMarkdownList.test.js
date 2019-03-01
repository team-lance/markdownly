import React from 'react';
import { shallow } from 'enzyme';
import SavedMarkdownList from './SavedMarkdownList';

describe('SavedMarkdownList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <SavedMarkdownList titles={['title1', 'title2']}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
