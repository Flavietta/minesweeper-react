import React, { Component } from 'react'
import './box.css'

export class Box extends Component {

  checkMine = () => {
    this.props.checkMine(this.props.i, this.props.j);
  }

  render() {
    return (
      <div
        className={this.props.boxClass}
        onClick={this.checkMine}
      >
        <span className="content" style={{ display: this.props.myself.visible ? "table" : "none" }}>{this.props.myself.content}</span>
      </div>
    )
  }
}
