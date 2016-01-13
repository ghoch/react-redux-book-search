import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    const styles = {
      listitem: {
        cursor: 'pointer',
        marginBottom: '10px !important',
        minWidth: 200
      }
    };

    return this.props.books.map((book, index) => {
      return (
        <li
          key={index}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
          style={styles.listitem}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // When selectBook is called the result is passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from component to container -
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
