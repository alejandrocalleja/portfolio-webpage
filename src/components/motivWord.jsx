import React, { Component } from "react";

class MotivWord extends Component {
  styles = {
    fontSize: "calc(36px + 2vmin)",
    fontWeight: "100",
    color: "#ffffff",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    maxWidth: "500px",
  };

  render() {
    return <div style={this.styles}>{this.props.word}</div>;
  }
}

export default MotivWord;

