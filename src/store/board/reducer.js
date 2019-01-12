import { fromJS } from 'immutable';
import * as types from './types';

const initialState = fromJS({
    board: [],
});

export default function reduce(state = initialState, action = {}) {

    switch (action.type) {
        case types.BOARD_CREATED:

            return state.merge({
                board: action.board,
            });
        default:
            return state;
    }
}

export function getBoard(state) {

    return state.board.get('board');
}