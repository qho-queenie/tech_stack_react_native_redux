import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount(){
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, t2) => r1 !== r2
      });

      this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    //to return a single library's row with a component's particular instance
    return <ListItem library={library} />;
  }

  render() {
      console.log("boo", this.props);
      return(
        <ListView
          dataSource={=this.dataSource}
          renderRow={this.renderRow}
        />
      );
  }
}

const mapStateToProps = state => {
  // console.log(state, "hi");
  //this state.libraries already have some data in here from LibraryReducer.js
  return {
    dataToShow : state.libraries

  };
};

export default connect(mapStateToProps)(LibraryList);
