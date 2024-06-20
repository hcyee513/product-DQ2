import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { v4 as uuidv4 } from 'uuid';
import syncCharts from '../../expand/syncAddition';

syncCharts();

@Component({
  selector: 'app-line-column-chart',
  templateUrl: './line-column-chart.component.html',
  styleUrls: ['./line-column-chart.component.css']
})
export class LineColumnChartComponent implements OnInit {

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
    lineColor: '#8B9FBC',
    crosshair: true
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
  @Input() chartData: any[] = [];

  constructor() { }

  ngOnInit() {
    this.chartId = uuidv4();
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  private drawChart(): void {
    this.chart = Highcharts.chart(this.chartId, {
      chart: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
      plotOptions: {},
      series: this.chartData,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 820
          }
        }]
      }
    })
  }

  public addHighlight(e: any) {
    let point, event;
    for (let i = 0; i < Highcharts.charts.length; i++) {
      const chart = Highcharts.charts[i];
      if (chart) {
        event = chart.pointer.normalize(e);
        point = (chart.series[0] as any).searchPoint(event, true);
        if (point) {
          point.highlight(e);
        }
      }
    };
  }

  public updatePlotOptions(value: string): void {
    console.log(value)
    this.chart.update({
      plotOptions: {
        column: {
          stacking: value
        }
      }
    })
  
  }

  public updateXAxis(data: string): void {
    // const categories = data.split(',').map(item => item.trim());
    // this.chart.xAxis[0].categories.push(categories);
    // this.chart.update({
    //   xAxis: {
    //     categories: this.chart.xAxis[0].categories
    //   }
    // });
  }

  public updateYAxis(value: boolean): void {
    if (!value) {
      this.chart.update({
        yAxis: {
          title: {
            text: '',
          }
        }
      })  
    }
    
  }

}

