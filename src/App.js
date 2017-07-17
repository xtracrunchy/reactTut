import React from 'react';

// HOC = Higher Order Component
const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count : 0}
  }

  update(){
    this.setState({count : this.state.count + 1})
  }

  componentWillMount(){
    console.log('this will mount')
  }

  render() {
    return(
      <InnerComponent update={this.update.bind(this)}
      {...this.props}
      {...this.state}
      />
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <Button>Button</Button>
        <hr />
        <LabelHOC>Label</LabelHOC>
      </div>
    )
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
  componentWillMount(){
    console.log("label will mount once")
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App
