import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount = () => {
    this.props.employeesFetch();
    //^asynchronous, so we need to create our data source twice
    // if the user navigates away from this page, this component will be unmounted
    this.createDataSource(this.props);
  };

  componentWillReceiveProps(nextProps) {
    //nextProps is the next set of props that the component will be rendered with
    //this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
    //this datastore does not know how to use objects
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    // key value pair - val contains name, shift, and phone
    //end result - turn key value pair into a single object
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
