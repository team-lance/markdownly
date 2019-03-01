import React from 'react';
import { shallow } from 'enzyme';
import SaveAs from './SaveAs';

describe('SaveAs', () => {
  it('simulates a save event via button click', () => {
    const onSave = jest.fn();
    const wrapper = shallow(<SaveAs title={'title'} onSave={onSave} handleChange={jest.fn()}/>);
    expect(wrapper.find('form').simulate('submit'));
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
