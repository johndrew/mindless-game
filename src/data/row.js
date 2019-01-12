import _ from 'lodash';
import Cell from './cell';

class Row {

    constructor({ cells, rowIndex }) {
        
        this.cells = this.populateCells(cells, rowIndex);
        this.length = cells.length;
    }

    populateCells(cells, rowIndex) {

        const populatedCells = [];
        for (let i = 0; i < cells.length; i += 1) {
            populatedCells.push(new Cell({ x: i, y: rowIndex, value: cells[i] }));
        }
        return populatedCells;
    }

    /**
     * Determines if the cells in the row have all the connections they need
     * @param {Board} board Represents the board the cell is part of
     * @returns {Boolean} True if all connections are made
     */
    areRowComplete(board) {

        return _.every(this.cells, cell => cell.isCellComplete(board));
    } 
}

export default Row;
