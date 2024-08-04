export class PlayerState {
  private points: number;
  private health: number;
  private startTime: number;
  private maxHealth: number;

  constructor(initialPoints: number = 0, maxHealth: number = 100) {
    this.points = initialPoints;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.startTime = Date.now();
  }

  // Update the points
  public addPoints(amount: number): void {
    this.points += amount;
  }

  public getPoints(): number {
    return this.points;
  }

  public getStateTime(): number {
    return this.startTime;
  }

  // Update the health
  public takeDamage(amount: number): void {
    this.health = Math.max(this.health - amount, 0);
  }

  public heal(amount: number): void {
    this.health = Math.min(this.health + amount, this.maxHealth);
  }

  public getHealth(): number {
    return this.health;
  }

  // Reset the game state
  public reset(): void {
    this.points = 0;
    this.health = this.maxHealth;
    this.startTime = Date.now();
  }

  // Check if the game is over
  public isGameOver(): boolean {
    return this.health <= 0;
  }
}
