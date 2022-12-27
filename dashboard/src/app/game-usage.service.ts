import { Injectable } from '@angular/core';
import { ChartData } from 'chart.js';
export interface GameUsage {
  game: string;
  year: number;
  month: number;
  date: string;
  activeUsers: number;
}

@Injectable({
  providedIn: 'root'
})
export class GameUsageService {

  constructor() { }

  getGameUsage(): ChartData<'line', {key: string, value:number}[]> {
    return {
      datasets: [
        {
        label: 'League of Legends',
        data: [
          {key: '2020-01-30',value:	131285212},
          {key: '2020-02-28',value:	134551212},
          {key: '2020-03-30',value:	144947212},
          {key: '2020-04-30',value:	154624462},
          {key: '2020-05-30',value:	141187161},
          {key: '2020-06-30',value:	137710582},
          {key: '2020-07-30',value:	134338301},
          {key: '2020-08-30',value:	131067188},
          {key: '2020-09-30',value:	123707185},
          {key: '2020-10-30',value:	118786886},
          {key: '2020-11-30',value:	142217348},
          {key: '2020-12-30',value:	146507849},
          {key: '2021-01-30',value:	140949027},
          {key: '2021-02-28',value:	142823579},
          {key: '2021-03-30',value:	145603491},
          {key: '2021-04-30',value:	143802678},
          {key: '2021-05-30',value:	146868113},
          {key: '2021-06-30',value:	151636687},
          {key: '2021-07-30',value:	153315685},
          {key: '2021-08-30',value:	151851490},
          {key: '2021-09-30',value:	151297082},
          {key: '2021-10-30',value:	149255912},
          {key: '2021-11-30',value:	150367689},
          {key: '2021-12-30',value:	154981226},
          {key: '2022-01-30',value:	153307011},
          {key: '2022-02-28',value:	155556231},
          {key: '2022-03-30',value:	153312677},
          {key: '2022-04-30',value:	152366661},
          {key: '2022-05-30',value:	152951432},
          {key: '2022-06-30',value:	151281358},
          {key: '2022-07-30',value:	149906790},
          {key: '2022-08-30',value:	150130018},
          {key: '2022-09-30',value:	151102355},
                ],
        parsing: {
          xAxisKey: 'key',
          yAxisKey: 'value'
        }
      },
      {
        label: 'Minecraft',
        data: [
          {key: '2020-01-30', value: 100166400},
          {key: '2020-02-28', value: 105121600},
          {key: '2020-03-30', value: 110700000},
          {key: '2020-04-30', value: 113715000},
          {key: '2020-05-30', value: 108029250},
          {key: '2020-06-30', value: 104680343},
          {key: '2020-07-30', value: 114641504},
          {key: '2020-08-30', value: 119238404},
          {key: '2020-09-30', value: 125211901},
          {key: '2020-10-30', value: 132736654},
          {key: '2020-11-30', value: 137328587},
          {key: '2020-12-30', value: 134114587},
          {key: '2021-01-30', value: 133214560},
          {key: '2021-02-28', value: 136412556},
          {key: '2021-03-30', value: 140119750},
          {key: '2021-04-30', value: 145011468},
          {key: '2021-05-30', value: 151025560},
          {key: '2021-06-30', value: 159905516},
          {key: '2021-07-30', value: 162055144},
          {key: '2021-08-30', value: 164055130},
          {key: '2021-09-30', value: 166760147},
          {key: '2021-10-30', value: 172600146},
          {key: '2021-11-30', value: 173602216},
          {key: '2021-12-30', value: 175011470},
          {key: '2022-01-30', value: 174021559},
          {key: '2022-02-28', value: 173504446},
          {key: '2022-03-30', value: 172055419},
          {key: '2022-04-30', value: 173501440},
          {key: '2022-05-30', value: 173025544},
          {key: '2022-06-30', value: 172014459},
          {key: '2022-07-30', value: 172650116},
          {key: '2022-08-30', value: 173102116},
          {key: '2022-09-30', value: 172856016}
        ],
        parsing: {
          xAxisKey: 'key',
          yAxisKey: 'value'
        }
      }
  
    ]   
    }
  }
}