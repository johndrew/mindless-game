import _ from 'lodash';

class Cell {

    constructor({ x, y, value }) {

        this.x = x;
        this.y = y;
        this.value = value;
        this.connections = [];
        this.neighbors = null;
    }

    isConnected(cell) {

        return !!_.find(this.connections, neighbor => neighbor.isCellEqual(cell));
    }

    /**
     * Determines if the cell has all the connections it needs
     * @param {Board} board Represents the board the cell is part of
     * @returns {Boolean} True if all connections are made
     */
    isCellComplete(board) {

        if (this.neighbors == null) this.neighbors = board.getNeighborCells(this);
        return _.every(this.neighbors, this.isConnected);
    }

    isConnectionValid(value) {

        if (this.value === 0 && value === 9) return true;
        if (this.value === 9 && value === 0) return true;
        if (this.value === value) return true;
        if (this.value - value === 1) return true;
        if (this.value - value === -1) return true;
        return false;
    }

    canCellConnectToAnotherCell(cell, board) {

        if (this.neighbors == null) this.neighbors = board.getNeighborCells(this);
        const isNeighbor = _.find(this.neighbors, neighbor => neighbor.isCellEqual(cell)) || false;
        if (!isNeighbor) return false;
        return this.isConnectionValid(cell.value);
    }

    isCellEqual({ x, y }) {

        return this.x === x && this.y === y;
    }

    connectCells(cell) {

        if (!_.find(this.connections, neighbor => neighbor.isCellEqual(cell))) this.connections.push(cell);
    }
}

export default Cell;
