# The Mindless Game
Waste Time and Drain your Mind

## Background
This is a game I invented in high school Calculus class. I would take my graphing calculator, which allowed me to type in a grid of numbers. I would type in a random amount of numbers such that the grid width was even. Then I would copy all of these numbers onto paper and draw lines between numbers that fell next to each other on the number line. After I believed I found all connections (which got harder as I cluttered up the grid with my lines), I would copy the lines to another piece of paper and see if any cool patterns resulted.

The goal was to waste class time, and that I definitely achieved.

I later named the game "The Mindless Game" because it is completely pointless and allows the player to zone out while playing.

## How to Play
Given a grid of numbers, find all of the connections between neighboring cells in a grid.

A cell neighbors another cell if it is horizontally, vertically, or diagonally adjacent to the cell. For example, in a 3x3 grid, the center cell neighbors all other cells in the grid. The top left cell has 3 neighbors, and the one to its right has 5 neighbors.

Neighbors are connected if they meet one of these criteria:

* They are the same number (e.g. 2 and 2)
* They are one number apart (e.g 1 and 2, 2 and 3, 2 and 1)
* One is 9 and the other is 0 (this is the same as the one number apart rule)

Users make connections by selecting a starting cell and an ending cell. If the two are connected, a line will appear over the cells connecting them.

Once all connections have been found, the game is over.