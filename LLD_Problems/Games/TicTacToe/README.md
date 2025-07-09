# Parking Lot Problem

## Statement

The Tic Tac Toe game is a classic two-player game where players take turns marking a space in a 3x3 grid. The objective is to be the first to get three of their marks in a row, either horizontally, vertically, or diagonally. The game can also end in a draw if all spaces are filled without a winner.

## Requirement Gathering

### Initial Requirements

- Implement a standard Tic Tac Toe game with two players.
- Players take turns placing their marks on a 3x3 grid.
- The game ends when one player gets three marks in a row (horizontally, vertically, or diagonally) or when the grid is full (draw).
- The game should display the current state of the board after each move.
- The game should allow future expansion to support AI players and variable board sizes.

### Follow-up Questions

1. So, Tic Tac Toe is a two-player game. By an AI player, do you mean that we have more than two players or that one of the players is AI?
2. With variable board size, are we going to have a different condition that marks a player has won? Like, if we have a 4x4 board, to win, the user has to have 4 crosses or knots in a sequence?
3. Is the board always going to be symmetrical?
4. If we have more than 2 players as per question 1, we are going to add symbols for each player?
5. Do we keep a track of who won in the DB?

### New Requirements

- For this problem, limit to two players (Human vs Human OR Human vs AI). But keep your design extensible if tomorrow we add multi-player support with unique symbols.
- NxN board (default is 3x3, extensible to N).
- Symbols are X and O by default.
- No time limit or concurrency concerns (single-threaded design).
- No UI or persistence integration required in this scope.
- Design should be clean, extensible, testable, and OOP-principled.

### Additional Constraints

No additional constraints were specified, but the design should be flexible enough to accommodate future requirements such as:

- Adding AI players with different difficulty levels.

## Solution Design

Find the detailed design in the [Solution](./Solution/README.md) file and the TypeScript implementation in [Solution/src](./Solution/src/).
