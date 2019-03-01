import React, { PureComponent } from 'react';
import SaveAs from '../components/SaveAs';
import store from '../store';
import { createMarkdown } from '../actions/markdownListActions';
import { getMarkdown } from '../selectors/markdownSelectors';
import shortId from 'shortid';

export default class SaveAsForm extends PureComponent {
  state = {
    markdownList: [],
    title: '',
    id: ''
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const markdown = getMarkdown(state);
      this.setState({ markdown });
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSave = event => {
    event.preventDefault();
    const someId = shortId.generate();
    const { title, markdown, id } = this.state;
    this.setState({ id: someId });
    store.dispatch(createMarkdown({ title, markdown, id }));
    
  };

  render() {
    const { title } = this.state;
    return (
      <SaveAs handleChange={this.handleChange}
        onSave={this.onSave}
        title={title}
      />
    );
  }
}
