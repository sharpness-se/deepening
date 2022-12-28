import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { GameUsage } from '../game-usage.service';

interface Data {
  key: string;
  value: number;
}
interface Dataset {
  label: string;
  data: Data[];
  parsing: {
    xAxisKey: string;
    yAxisKey: string;
  };
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() gameUsagesArrays?: GameUsage[][];


  gameChartData: ChartData<'line', { key: string; value: number }[]> = {
    datasets: [],
  };
  gameChartOptions: ChartOptions = {};

  public ngOnInit(): void {
    if (this.gameUsagesArrays !== undefined) {
      this.gameChartData.datasets =
      this.gameUsagesArrays.map(gameUsages => {
        const data: Data[] = gameUsages.map((gameUsage) => ({
          key: gameUsage.date,
          value: gameUsage.activeUsers,
        }));

        return {
          label: gameUsages[0].game,
          data,
          parsing: {
            xAxisKey: 'key',
            yAxisKey: 'value',
          },
        };
      })
    }
  }
}
