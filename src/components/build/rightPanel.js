import React,{Component} from "react";

class c extends Component {
  constructor(props){
      super(props)
      this.state = {
        placeholderValue: ''
      }
      this.handleUsernameChange=this.handleUsernameChange.bind(this)
  }
  handleUsernameChange (event) {
    this.setState({
      placeholderValue: event.target.value
    })
  }
  render() {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0,
          top: "64px"
        }}
      >
        <label>
          {" placeholder "}
          <input value={this.state.placeholderValue} onChange={this.handleUsernameChange}/>
        </label>
        <br />
        <label>
          {" defaultValue "}
          <input />
        </label>
      </div>
    );
  }
}

export default c;
