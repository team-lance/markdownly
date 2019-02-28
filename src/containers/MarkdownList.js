import React, { PureComponent } from 'react';
import { getTitles } from '../selectors/markdownListSelectors';
import { MarkdownTitles } from '../components/SavedMarkdownList';
import store from '../store';

export default class MarkdownList extends PureComponent {
    state = {
      markdownTitles: []
    };

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const markdownTitles = getTitles(state);
        this.setState({ markdownTitles });
      });
    }
    componentWillUnmount() {
      if(this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const { markdownTitles } = this.state;
      return (
        <MarkdownTitles
          titles={markdownTitles}
        />

      );
    }
}
