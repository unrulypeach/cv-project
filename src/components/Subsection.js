import React, { Component } from "react";
import SubHeader from "./SubHeader";

export default class Subsection extends Component {
  render() {
    return(
      <div>
        <SubHeader title={this.props.title} />
      </div>
    )
  }
}