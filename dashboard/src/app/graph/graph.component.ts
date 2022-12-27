import { Component, Input } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  @Input() gameChartData?: ChartData<'line', {key: string, value:number}[]>;
  gameChartOptions: ChartOptions = {
}

}
