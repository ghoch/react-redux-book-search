import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const styles = {
      detail: {
        padding: '40px 20px 20px',
        minWidth: 200,
        height: '50vh',
        width: '50vw'
      }
    };

    if (!this.props.book) {
      return (
        <div className="jumbotron" style={styles.detail}>&larr; Select a book to get started</div>
      );
    }

    return (
      <div className="jumbotron" style={styles.detail}>
        <h5>{this.props.book.title}</h5>
        <p>{this.props.book.description}</p>
        <p>Published Date: {this.props.book.published}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
