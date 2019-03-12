import React, { Component } from 'react'
import { Box } from './box.js'
import './grid.css'

export class Grid extends Component {
  render() {

    var boxes =[];
    for (let i = 0; i < this.props.grid.length; i++) {
        for (let j = 0; j < this.props.grid[i].length; j++) {
            var id = i+"_"+j;
            // var boxClass = this.props.grid[i][j].visible ? "box on" : "box off";
            // var mine = this.props.myself.content==="mine" ? "mine" : "";
            // mine = mine +" " + boxClass;
            var boxClass = "box ";
            if (this.props.grid[i][j].visible) {
                if (this.props.grid[i][j].content==="mine") {
                    boxClass +="mine " 
                }else{
                    boxClass +="on " 
                }
            }else{
                boxClass +="off "
            }
            boxes.push(
                <Box
                    i={i}
                    j={j}
                    myself = {this.props.grid[i][j]}
                    checkMine = {this.props.checkMine}
                    key={id}
                    boxClass={boxClass}
                />
            );
            
        }
        
    }
    
    return (
      <div 
      className="grid"
      >
        {boxes}
      </div>
    )
  }
}
