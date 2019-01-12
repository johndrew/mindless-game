import _ from 'lodash';
import Row from './row';

class Board {

    constructor(rows) {

        this.rows = this.populateRows(rows);
        this.width = rows[0] ? rows[0].length : 0;
        this.height = rows.length;
    }

    populateRows(rows) {

        const populatedRows = [];
        for (let i = 0; i < rows.length; i += 1) {

            populatedRows.push(new Row({ cells: rows[i], rowIndex: i }));
        }
        return populatedRows;
    }

    isBoardComplete() {

        return this.rows.areRowsComplete(this);
    }

    getNeighborCoordinates(x, y, width, height) {

        var possibleCoordinates = [
            { x: x - 1, y: y - 1 },
            { x: x - 1, y: y },
            { x: x - 1, y: y + 1 },
            { x: x, y: y - 1 },
            { x: x, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x + 1, y: y },
            { x: x + 1, y: y + 1 },
        ];

        return _.filter(possibleCoordinates, ({ x, y }) => x >= 0 && x <= width - 1 && y >= 0 && y <= height - 1);
    }

    getCell({ x, y }) {

        return this.rows[y].cells[x];
    }

    /**
     * Returns all neighboring cells for a given cell.
     * @param {Cell} cell Represents a cell on the board
     * @returns {Boolean} True if all connections are made
     */
    getNeighborCells(cell) {

        return _.map(this.getNeighborCoordinates(cell.x, cell.y, this.width, this.height), coordinate => this.getCell(coordinate));
    }
}

export default Board;
