import React, { Component } from 'react';
import './App.css';
import CardArray from './CardArray';
import Header from './Header';
import Footer from './footer';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';

//import connect function for the redux
import {connect} from 'react-redux';
//import actions
import {setSearchField, requestRobots} from './actions';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requstRobots.isPending,
    error: state.requstRobots.error,
    robots: state.requstRobots.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
    }
  }
  // this function was formerly used 
  // so now am using redux
  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value});
  //   console.log(event.target.value);
  // }

  componentDidMount(){
    //console.log(this.props.store.getState())
    this.props.onRequestRobots();
    //console.log('done');
  }

  
  render() {
    //const {robots} = this.state;
    const {onSearchChange, searchField, isPending, error, robots} = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? 
      <h1 className='tc ma5'> Loading, please wait! </h1>:
      <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <ErrorBoundry error={error}>
            <CardArray robots={filteredRobots} />
          </ErrorBoundry>
          <Footer />
      </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
