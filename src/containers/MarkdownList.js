import React, { PureComponent } from 'react';
import { getTitles } from '../selectors/getTitlesSelector';
import { SavedMarkdownList } from '../components/SavedMarkdownList';
import store from '../store';

export default class MarkdownList extends PureComponent {
    state = {
      markdownList: []
    };

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const markdownList = getTitles(state);
        this.setState({ markdownList });
      });
    }
    componentWillUnmount() {
      if(this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const { markdownList } = this.state;
      return (
        <SavedMarkdownList
          titles={markdownList}
        />

      );
    }
}
