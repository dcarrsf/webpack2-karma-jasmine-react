import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newName = e.target.value;
    this.setState({
      name: newName
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Please input your name here:</p>
        <input ref="input"
            onChange={this.handleChange}
            value={this.state.name} />
        <p>Hello, <span ref="name">{this.state.name}</span> </p>
      </div>
    );
  }
}

export default App;