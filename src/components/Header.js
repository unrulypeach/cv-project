import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1>{this.props.first} {this.props.last}</h1>
        <span>{this.props.github} </span>
        <span>{this.props.email}</span>
      </div>
    )
  }
}