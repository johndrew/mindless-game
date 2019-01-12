import Board from './board';

describe(__filename, () => {
    
    describe('method getNeighborCoordinates', () => {
        
        describe('Positive Tests', () => {

            it('returns all possible neighbors for upper left corner', () => {
                
                const board = new Board([
                    [1, 2],
                    [0, 9]
                ]);
                const actual = board.getNeighborCoordinates(0, 0, 2, 2);
                expect(actual.length).toEqual(3);
            });

            it('returns all possible neighbors for upper right corner', () => {
                
                const board = new Board([
                    [1, 2],
                    [0, 9]
                ]);
                const actual = board.getNeighborCoordinates(1, 0, 2, 2);
                expect(actual.length).toEqual(3);
            });

            it('returns all possible neighbors for bottom left corner', () => {
                
                const board = new Board([
                    [1, 2],
                    [0, 9]
                ]);
                const actual = board.getNeighborCoordinates(0, 1, 2, 2);
                expect(actual.length).toEqual(3);
            });
            it('returns all possible neighbors for bottom left corner', () => {
                
                const board = new Board([
                    [1, 2],
                    [0, 9]
                ]);
                const actual = board.getNeighborCoordinates(1, 1, 2, 2);
                expect(actual.length).toEqual(3);
            });

            it('returns all possible neighbors for the middle cell in a 3x3 board', () => {
                
                const board = new Board([
                    [1, 2, 3],
                    [0, 9, 4],
                    [5, 7, 8],
                ]);
                const actual = board.getNeighborCoordinates(1, 1, 3, 3);
                expect(actual.length).toEqual(8);
            });
        });
    });
});