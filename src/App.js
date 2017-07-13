import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "This is the state text"
    }
  }
update(e){
  this.setState({txt: e.target.value})
}

  render(){
    // Can't do <h1>text</h1> <b>text</b> b/c you can't return
    // React.createElememnt(,,,) React.createElememnt(,,,)
    // fix this by doing return (<div> <h1>text</h1> <b>text</b> </div>)

    // You can access prop by interpalating with {this.prop."name of prop"}
    // Or you could do let txt=this.props.txt then return <h1>{txt}</h1>


    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}
const Widget = (props) => <input type="text" onChange={props.update} />

// Another way to make a copmenent. Called stateless function component
// const App = () => <h1>Same thing</h1>;
// Difference is that the class component can have "state"

// we can define the props we are looking for by adding the below.
// key = name of property : value is the type we are looking for
// we can add a isrequired to the values.
// App.propType = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//     txt: "This is the default text"
// }
export default App
