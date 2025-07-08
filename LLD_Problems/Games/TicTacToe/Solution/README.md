# Tic Tac Toe LLD Solution

## Requirements Summary

1. Implement a two-player Tic Tac Toe game(Human vs Human).
2. Players take turn placing their marks on an NxN grid (default is 3x3).
3. The game ends when one player gets N marks in a row (horizontally, vertically, or diagonally) or when the grid is full (draw).
4. Symbols are X and O by default.
5. No time limit or concurrency concerns (single-threaded design).
6. No UI or persistence integration required in this scope.
7. Extensible design to support multi-player, AI players, and variable board sizes in the future.

## Design Overview

### Mark (ENUM)

We will define an enum called `MARK` with two values as default for now. We can extend this enum to add more symbols as the players grow in the system. The reason for choosing enum over class is that we are just storing the symbol, there is no other data like the image, name, label etc for the symbol, so the overhead of object creation as well as memory is eliminated. Also we are going to compare the `MARK` after each round and comparing enum is much faster than objects.

The `MARK` enum will have the following values by default.

- `EMPTY` - to represent an empty cell
- `CROSS`
- `KNOT`

### Player

We next define an interface or abstract class for `Player` representing the players of the game. The reason of choosing an interface or abstract class is that we can implement or extend it to `HumanPlayer` and `AIPlayer` in the future. For now we will have `HumanPlayer`.

It will have the following properties:

- Name
- Mark (`MARK`)

It has following methods:

- setSymbol()
- getSymbol()
- playTurn() -> User selects the free place on the board to mark

# PlayerFactory

We create a Factory `IPlayerFactory` interface for creating `Player` objects based on the user selection. Also create `HumanPlayerFactory` and `AIPlayerFactory` concrete classes implementing `IPlayerFactory`.

It has following method:

- createPlayer() -> Returns object of `Player`

### Board

This will represent the current state of the game. This class will handle the creation of game with variable size.

It will be have the following properties:

- Board State -> Matrix which of type `MARK`
- playerCounter [{
  rowCounts[N]: [],
  columnCounts[N]: [],
  diagonalCount: 0,
  antiDiagonalCount: 0,
  }] -> Per player Counters for rows, columns, and both diagonals

It will have following methods:

- constructor(N) -> to setup board of size NxN
- printState() -> shows the current state of the game
- testWinCondition(player) -> to test the wining condition in O(1) using
- updateState(row, col, Mark) -> Updates the state of the game
- resetBoardState() -> Clears the board for a new Game

### Game

This class is an orchestrator for our game. It will handle the adding players, initializing the board, control the game with turns and control the start and reset of the game. We can either treat it as a Singleton or a normal class if multiple parallel games are required in future.

It will be have the following properties:

- Players -> Array of type `Player`

It will have following methods:

- initializePlayer(N) -> create N players in the game of Human or AI type
- resetGame() -> resets the players and board state
- startGame() -> A loop till testWinCondition() return Draw or a winner Player. Player's playTurn is called and state is updated with their mark.

## Project Structure

## Design Patterns Used

**Strategy Pattern:** Different algorithms for Player's `playTurn()` method
**Factory Pattern:** Player creation using HumanPlayerFactory, AIPlayerFactory
**Singleton Pattern:** Optional for Game orchestrator
**Template Method:** The startGame() defines the skeleton of game execution with playTurn methods

### How to Run

1. Clone the repository:

```bash
git clone https://github.com/Shyamal-Shah/system-design.git
cd LLD_Problems/Games/TicTacToe/Solution
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npx ts-node src/index.ts
```

Initialize a type script project if not already done:

```bash

```
