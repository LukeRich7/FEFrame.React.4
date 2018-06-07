import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {

  return (
    <NumberOfStudents/>
  )
}
class NumberOfStudents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      enrolledStudents: 150,
      waitlistedStudents: 25
    };
  }

  incrementOneE() {
    this.setState({enrolledStudents:this.state.enrolledStudents + 1});
  };

  incrementOneW() {
    this.setState({waitlistedStudents:this.state.waitlistedStudents + 1});
  };

  incrementAmountE() {
      this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount1)});
  };

  incrementAmountW() {
    this.setState({waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmount2)});
};

render() {
  return (
  <div>
    <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
    <button onClick={this.incrementOneE.bind(this)}>Add 1 Enrolled Student</button>
    <h3>Add Multiple Enrolled Students:</h3>
    <input type="number" onChange={event => this.setState({ addAmount1: event.target.value})} value={this.state.addAmount1}/>
    <button onClick={this.incrementAmountE.bind(this)}>Increase Students</button>

    <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
    <button onClick={this.incrementOneW.bind(this)}>Add 1 Waitlisted Student</button>
    <h3>Add Multiple Waitlisted Students:</h3>
    <input type="number" onChange={event => this.setState({ addAmount2: event.target.value})} value={this.state.addAmount2}/>
    <button onClick={this.incrementAmountW.bind(this)}>Increase Students</button>








  </div>
  );
  }
  }

  





ReactDOM.render(
<App/>,
document.getElementById('root')
)