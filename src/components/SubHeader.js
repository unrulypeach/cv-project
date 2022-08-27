import React, { Component } from "react";

export default class SubHeader extends Component {
  render() {
    return(
      <div className="Subheader">
        <h2 className="subTitle">{this.props.title}</h2>
        <hr/>
      </div>
    )
  }

}