import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { GameUsageService } from './game-usage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  gameChartData: ChartData<'line', {key: string, value:number}[]>;

  constructor(private readonly gameUsageService: GameUsageService){
    this.gameChartData = this.gameUsageService.getGameUsage();
  }
}