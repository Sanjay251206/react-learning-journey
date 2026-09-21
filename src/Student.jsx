import { Component } from "react";
class Student extends Component {
  constructor() {
    super();
    this.state = {
      marks: 50
    };
  }
  increaseMarks = () => {
    this.setState({
      marks: this.state.marks + 5
    });
  };
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>
          Department: {this.props.department}
        </p>
        <p>
          Marks: {this.state.marks}
        </p>
        <button onClick={this.increaseMarks}>
          Increase Marks
        </button>
      </div>
    );
  }
}
export default Student;