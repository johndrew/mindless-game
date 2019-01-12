import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../../data/board';
import * as selectors from '../../store/board/reducer';
import * as actions from '../../store/board/actions';

import './BoardComponent.css';

class BoardComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selectedCell: null,
            otherCell: null,
        };

        this.renderBoard = this.renderBoard.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderCell = this.renderCell.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
    }
    
    render() {
        
        return (
            <div className="board__container">
                {this.renderBoard(this.props.board)}
            </div>
        );
    }

    componentDidMount() {
  
      this.props.dispatch(actions.createBoard({ width: 10, height: 10 }));
    }

    renderBoard(board) {

        const boardStyles = {
            display: 'grid',
            gridTemplateColumns: _.map(board.rows, () => 'auto').join(' '),
        };
        const renderedData = [];
        for (let i = 0; i < board.rows.length; i += 1) {
            renderedData.push(this.renderRow(board.rows[i], i));
        }
        return <div className="board__board" style={boardStyles}>{renderedData}</div>
    }

    renderRow(row, rowIndex) {

        const rowStyles = {
            display: 'grid',
            gridTemplateRows: _.map(row.cells, () => 'auto').join(' '),
        };
        const renderedRow = [];
        for (let i = 0; i < row.cells.length; i += 1) {

            renderedRow.push(this.renderCell(row.cells[i], i));
        }
        return <div className={`board__row board_row--${rowIndex}`} key={rowIndex} style={rowStyles}>{renderedRow}</div>;
    }

    handleCellClick(event, cell) {

        if (this.state.selectedCell) {

            if (this.state.selectedCell.canCellConnectToAnotherCell(cell, this.props.board)) {

                this.state.selectedCell.connectCells(cell);
                cell.connectCells(this.state.selectedCell);
                this.setState({
                    otherCell: cell,
                });
            }
            
            this.setState({
                selectedCell: null,
            });
        } else {

            this.setState({
                selectedCell: cell,
                otherCell: null,
            });
        }
    }

    renderCell(cell, cellIndex) {

        const selected = this.state.selectedCell && this.state.selectedCell.isCellEqual(cell);
        const other = this.state.otherCell && this.state.otherCell.isCellEqual(cell);

        return <p
            className={`board__cell board__cell--${cellIndex} ${selected ? 'board__cell--selected' : ''} ${other ? ' board__cell--other' : ''}`}
            key={cellIndex}
            onClick={e => this.handleCellClick(e, cell)} >
            {cell.value}
        </p>;
    }
}

function mapStateToProps(state) {
    
    return {
        board: new Board(selectors.getBoard(state)),
    };
}

export default connect(mapStateToProps)(BoardComponent);