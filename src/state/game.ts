import { Player } from "../models/player";

export class GameState {
  private timeLimit: number; // In seconds
  private startTime: number;
  private elapsedTime: number;
  public players: Array<Player> = new Array<Player>();

  constructor(timeLimit: number = 300) {
    this.timeLimit = timeLimit;
    this.startTime = Date.now();
    this.elapsedTime = 0;
  }

  get localPlayer() {
    return this.players[0];
  }

  // Update the elapsed time
  public updateElapsedTime(): void {
    this.elapsedTime = (Date.now() - this.startTime) / 1000;
  }

  public getElapsedTime(): number {
    return this.elapsedTime;
  }

  public getRemainingTime(): number {
    return Math.max(this.timeLimit - this.elapsedTime, 0);
  }

  // Reset the game state
  public reset(): void {
    this.startTime = Date.now();
    this.elapsedTime = 0;
  }

  // Check if the game is over
  public isGameOver(): boolean {
    return this.getRemainingTime() <= 0;
  }

  public updateGame() {
    // Check game state
    if (this.isGameOver()) {
      return console.log("Game Over");
    }

    // Update elapsed time
    this.updateElapsedTime();
  }
}
