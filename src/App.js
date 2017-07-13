import React from 'react';

class App extends React.Component {
  render(){
    return <Title text="123456" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

// text(all the props the component has received,
// the name for the particular prop, component)
Title.propTypes = {
  text(props, propName, component){
    // This is like .isRequired.
    if(!(propName in props)){
      return new Error('missing ${propName}')
    }
    if(props[propName].length < 6){
      return new Error('${propName} was too short')
    }
  }
}
export default App
