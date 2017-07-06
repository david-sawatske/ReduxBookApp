import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render()  {
    return (
      <div>Book Details</div> // to be updated
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
