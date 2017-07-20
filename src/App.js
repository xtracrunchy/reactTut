import React from 'react';

class App extends React.Component {
  render(){
    return(
      <Button>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Button>
    )
  }
}


// May want to iterate over children in component
class Button extends React.Component {
  constructor(){
    super();
    this.state = {selected: "None"}
  }

  selectedItem(selected){
    this.setState({selected})
  }

  render(){
    let func = child =>
      React.cloneElement(child, {
        onClick: this.selectedItem.bind(this, child.props.value)})
// props.children is only a descripter of the children (read only)
    let items = React.Children.map(this.props.children, func)
    return (
      <div>
        <h2>You have selected {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App
