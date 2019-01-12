import * as types from './types';

export function createBoard({ width, height }) {

    const board = [];
    for (let y = 0; y < height; y += 1) {

      const rows = [];
      for (let x = 0; x < width; x += 1) {
        rows.push(Math.floor(Math.random() * 10));
      }
      board.push(rows);
    }
    return {
        type: types.BOARD_CREATED,
        board: board,
    }
}