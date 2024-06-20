import * as Highcharts from 'highcharts';

export default function () {
  /**
   * Override the reset function 不會隱藏tooltip
   */
  Highcharts.Pointer.prototype.reset = function () {
    return undefined;
  };

  /**
   *懸停圖表或點擊會觸發這個方法
   */
    if (Highcharts.Point) {
      (Highcharts.Point as any).prototype.highlight = function (event: any) {
        event = this.series.chart.pointer.normalize(event); // 轉換為相對於圖表的座標
            this.onMouseOver(); // 顯示懸停時的標記
            // this.series.chart.tooltip.refresh(this); // 顯示tooltip
            this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
        };
    }
}

