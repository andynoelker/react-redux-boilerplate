import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../actionCreators';

const mapStateToProps = function(state){
  return {
    initialValues: state.test,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getTest: actionCreators.getTest,
  }, dispatch)
}

const mapFormToProps = function (state) {
  return {
    form: 'deep',
    fields: [
              'something',
            ]
  }
}

class Test extends Component {

  render() {
    const {fields: {something}} = this.props
    return (
      <div>
        React Redux Boilerplate is working successfully.<br />
        Redux Form Input: <input {...something} /><br />
        Value from State: {something.value}
      </div>
    )
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Test)
export default reduxForm(mapFormToProps(),mapStateToProps,mapDispatchToProps)(Test)
