import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-profit-loss-monitor',
  templateUrl: './position-profit-loss-monitor.component.html',
  styleUrls: ['./position-profit-loss-monitor.component.css']
})
export class PositionProfitLossMonitorComponent implements OnInit {

  public selectedRadio: string = 'stock';
  // 初始顯示table
  public slideToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeSlideToggle(event: any):void {
    this.slideToggle = event.target.checked;
  }

}
