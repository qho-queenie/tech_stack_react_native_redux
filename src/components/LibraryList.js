import React, { Component } from 'react';
import { connect } from 'react-redux';


// import { Text } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';

class LibraryList extends Component {
  render() {
      return;
  }
}

const mapStateProps = state => {
  console.log(state, "hi");
};

export default connect()(LibraryList);
