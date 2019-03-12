import React, { Component } from 'react'
import "./main.css"
import { Grid } from './grid.js'

export class Main extends Component {

    constructor(props) {
        super();

        this.state = {
            grid: Array(Array()),
        }
    }



    checkMine = (i, j) => {

        var newGrid = JSON.parse(JSON.stringify(this.state.grid));

        newGrid[i][j] = {
            visible: true,
            content: this.state.grid[i][j].content
        };
        if (newGrid[i][j].content === 0) {
            var grid = showAdjascent(newGrid, i, j);
        }
        console.log(newGrid);
        this.setState({
            grid: grid
        })
    }

    chargeField = () => {
        var grid = Array(10).fill(Array(9).fill({
            visible: false,
            content: 0
        }));
        var newGrid = JSON.parse(JSON.stringify(grid));

        for (let index = 0; index < 5; index++) {
            var i = Math.round(Math.random() * 10) - 1;
            var j = Math.round(Math.random() * 9) - 1;
            while (grid[i][j].content === "mine") {
                i = Math.round(Math.random() * 10) - 1;
                j = Math.round(Math.random() * 9) - 1;
            }
            console.log("random i " + i);

            console.log("random j " + j);
            newGrid[i][j] = {
                visible: false,
                content: "mine",
            };
            for (let ix = -1; ix < 2; ix++) {
                for (let jx = -1; jx < 2; jx++) {
                    if (i + ix >= 0 && j + jx >= 0 && i + ix <= 10 && j + jx <= 9) {
                        if (newGrid[i + ix][j + jx] != "mine") {

                            console.log(i + ix + "  xxx   " + j + jx);
                            newGrid[i + ix][j + jx] = {
                                visible: false,
                                content: newGrid[i + ix][j + jx].content + 1,
                            };
                        }
                    }

                }

            }
        }
        this.setState({
            grid: newGrid
        });
        return newGrid;
    }

    componentWillMount() {
        this.chargeField();
    }

    render() {
        return (
            <div className="main">
                <Grid
                    grid={this.state.grid}
                    checkMine={this.checkMine}
                />
            </div>
        )
    }
}

function showAdjascent(grid, i, j) {
    for (let ix = -1; ix < 2; ix++) {
        for (let jx = -1; jx < 2; jx++) {
            if (i + ix >= 0 && j + jx >= 0 && i + ix <= 10 && j + jx <= 9) {

                grid[i][j] = {
                    visible: true,
                    content: grid[i][j].content
                };
                if (grid[i + ix][j + jx].content === 0) {
                    showAdjascent(grid, ix, jx);
                }
            }
        }
    }
    return grid;
}