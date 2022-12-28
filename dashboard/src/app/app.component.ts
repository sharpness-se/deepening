import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { GameUsage, GameUsageService } from './game-usage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  gameUsagesArrays: GameUsage[][];

  constructor(private readonly gameUsageService: GameUsageService) {
    const lol = this.gameUsageService.getGameUsage('League of Legends');
    const mine = this.gameUsageService.getGameUsage('Minecraft');

    const combine = [lol, mine];
    this.gameUsagesArrays = combine;
  }
}
