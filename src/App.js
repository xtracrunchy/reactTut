import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''}
  }

  update(event){ // Value from the input field
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: this.c.refs.input.value})
  }   //findDOMNode(the component).value

  // ref is a way to refrence a node or instance of component in the app
  // ref returns the node we are referencing

  render(){
    return (
      <div>
        <input type="text" ref={node => this.a = node} onChange={this.update.bind(this)} />
        {this.state.a}
        <hr />
        <input type="text" ref="b" onChange={this.update.bind(this)} />
        {this.state.b}
        <hr />
        <Input ref={component => this.c = component} update={this.update.bind(this)} />
        {this.state.c}
      </div>
    )
      // MAKE SURE THE INPUT I IS UPPERCASED WHEN REF COMPONENTS!!!
  }
}

class Input extends React.Component {
  render(){
    return (<input ref="input" type="text" onChange={this.props.update}/>)
  }
}
export default App
