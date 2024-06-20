import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-profit-loss-analysis',
  templateUrl: './profit-loss-analysis.component.html',
  styleUrls: ['./profit-loss-analysis.component.css']
})
export class ProfitLossAnalysisComponent implements OnInit {

  public operateIncomeData: any[] = [{
    name: '今年營業收入',
    type: 'column',
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#6FBD4B',
    showInLegend: false, //刪掉圖例
  }, {
    name: '去年同期',
    type: 'line',
    data: [
      60, 60, 80, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#8B9FBC',
  }];

  public operateExpensesData: any[] = [{
    name: '今年營業收入',
    type: 'column',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#DE6280',
    showInLegend: false //刪掉圖例
  }, {
    name: '去年同期',
    type: 'line',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#8B9FBC',
  }];

  public operateGrossProfitData: any[] = [{
    name: '今年營業收入',
    type: 'column',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#A04EC7',
    showInLegend: false //刪掉圖例
  }, {
    name: '去年同期',
    type: 'line',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#8B9FBC',
  }];

  public netProfitData: any[] = [{
    name: '今年營業收入',
    type: 'column',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#37BCC5',
    showInLegend: false //刪掉圖例
  },
  {
    name: '去年同期',
    type: 'line',
    yAxis: 0,
    data: [
      27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      60.0, 28.6, 32.1
    ],
    color: '#8B9FBC',
  }];

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  private getData(): void {

  }


}
