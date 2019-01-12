import React, { Component } from 'react';

import './RulesDisplayComponent.css';

export default class RulesDisplayComponent extends Component {

    render() {

        return (
            <div className="rulesDisplay__container">
                <h3>How to Play:</h3>
                <div className="rulesDisplay__rules">
                    <div>Given a grid of numbers, find all of the connections between neighboring cells in a grid.</div>
                    <div>A cell neighbors another cell if it is horizontally, vertically, or diagonally adjacent to the cell. For example, in a 3x3 grid, the center cell neighbors all other cells in the grid. The top left cell has 3 neighbors, and the one to its right has 5 neighbors.</div>
                    <div>Neighbors are connected if they meet one of these criteria:</div>
                    <div>
                        <ul>
                            <li>They are the same number (e.g. 2 and 2)</li>
                            <li>They are one number apart (e.g 1 and 2, 2 and 3, 2 and 1)</li>
                            <li>One is 9 and the other is 0 (this is the same as the one number apart rule)</li>
                        </ul>
                    </div>
                    <div>Users make connections by selecting a starting cell and an ending cell. If the two are connected, a line will appear over the cells connecting them.</div>
                    <div>Once all connections have been found, the game is over.</div>
                </div>
            </div>
        );
    }
}