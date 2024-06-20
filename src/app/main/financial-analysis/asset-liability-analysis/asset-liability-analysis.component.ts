import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { LineColumnChartComponent } from 'src/app/share/line-column-chart/line-column-chart.component';

@Component({
  selector: 'app-asset-liability-analysis',
  templateUrl: './asset-liability-analysis.component.html',
  styleUrls: ['./asset-liability-analysis.component.css']
})
export class AssetLiabilityAnalysisComponent implements OnInit {

  @ViewChild('assetTrendChart', { read: LineColumnChartComponent }) assetTrendChart!: LineColumnChartComponent;
  @ViewChild('debtTrendChart', { read: LineColumnChartComponent }) debtTrendChart!: LineColumnChartComponent;

  public assetTrendData = [
    {
      name: '流動資產',
      type: 'column',
      data: [100, 60, 20, 30, 40, 50, 60, 70, 80, 30, 90, 40],
      color: '#273347'
    },
    {
      name: '非流動資產',
      type: 'column',
      data: [20, 40, 20, 70, 40, 90, 100, 70, 40, 20, 10, 50],
      color: '#9D8160'
    },
    {
      name: '資產',
      type: 'line',
      data: [100, 60, 20, 30, 40, 50, 60, 70, 80, 30, 90, 40],
      color: '#8B9FBC'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  private getData(): void {
    // colume一條有兩個資料
    this.assetTrendChart.updatePlotOptions('normal');
    this.debtTrendChart.updatePlotOptions('normal');
  }

}
