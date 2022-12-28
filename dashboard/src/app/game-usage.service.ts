import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';
import data from 'src/assets/data-set.json';

export interface GameUsage {
  game: string;
  year: number;
  month: number;
  date: string;
  activeUsers: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameUsageService {
  constructor() {}

  getGameUsage(gameName: string): GameUsage[] {
    return data
      .filter((element) => element.game === gameName)
      .sort((a, b) => this.compareGameUsageByDate(a, b));
  }

  private compareGameUsageByDate(a: GameUsage, b: GameUsage): number {
    return a.year * 100 - b.year * 100 + a.month - b.month;
  }
}
