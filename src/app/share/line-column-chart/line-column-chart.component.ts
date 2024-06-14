import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-line-column-chart',
  templateUrl: './line-column-chart.component.html',
  styleUrls: ['./line-column-chart.component.css']
})
export class LineColumnChartComponent implements OnInit {

  @Input() chartOptions: Highcharts.Options = {};
  Highcharts = Highcharts;

  private titleConfig: Highcharts.TitleOptions = {
    text: ''
  }

  private xAxisConfig: any[] | Highcharts.XAxisOptions[] | undefined = [{
    categories: [
      '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
    ],
    labels: {
      style: {
        color: '#8B9FBC'
      }
    },
    lineColor: '#8B9FBC'
  }];

  private yAxisConfig: any[] | Highcharts.YAxisOptions[] | undefined = [{
    labels: {
      format: '{value}',
      style: {
        color: '#8B9FBC'
      }
    },
    title: {
      text: '百萬',
      style: {
        color: '#8B9FBC'
      }
    }
  }];

  public chart: any = null;
  public chartId: string = "container";

  constructor() { }

  ngOnInit() {
    this.chartId = uuidv4();
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  private drawChart(): void {
    console.log(this.chartOptions)
    if (Highcharts) {
      this.chartOptions = {
        chart: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          zooming: {
            type: 'xy'
          }
        },
        title: this.titleConfig,
        xAxis: this.xAxisConfig,
        yAxis: this.yAxisConfig,
        credits: {
          enabled: false
        },
        legend: {
          align: 'center',
        },
        tooltip: {
          shared: true
        },
        series: this.chartOptions.series
      };
    }

  }
}

