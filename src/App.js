import React from 'react';

class App extends React.Component {
  render(){
    return(
      <Parent>
        <div ClassName="Class A" />
        <div ClassName="Class B" />
      </Parent>
    )
  }
}


// May want to iterate over children in component
class Parent extends React.Component {
  render(){
    // Take in child and return the same child
    // let items = this.props.children.map(child => child)

    // React has it's own map .map(the children, mapping function)
    // let items = React.Children.map(this.props.children, child => child)

    // you can also put them into an array
    let items = React.Children.toArray(this.props.children)

    // You could also use a foreach
    // let items = React.Children
    //   .forEach(this.props.children,child => console.log(child.props.ClassName))

    // This will return a single child, if more than one throws err
    // let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App
