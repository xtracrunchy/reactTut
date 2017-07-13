import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {val : 0}
    this.update = this.update.bind(this)
  }

  update(){
    this.setState({
      val : this.state.val + 1
    })
  }

  componentWillMount(){
    // Only activates once before component mounts
    console.log('component will mount')
    this.setState({
      m: 2
    })
  }

  render(){
    console.log('render')
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

  componentDidMount(){
    // Activate when the component does mount to the DOM
    console.log('Component did mount')
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount(){
    // Will activate before component will unmount
    console.log('component will umount')
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id='a'></div>
      </div>
    )
  }
}
export default Wrapper
