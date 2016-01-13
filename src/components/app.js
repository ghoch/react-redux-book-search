import React from 'react';
import { Component } from 'react';
import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    const styles = {
      app: {
        padding: 30,
        display: 'flex',
        alignItems: 'center'
      }
    };

    return (
      <div style={styles.app}>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
