import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-flow-statement',
  templateUrl: './cash-flow-statement.component.html',
  styleUrls: ['./cash-flow-statement.component.css']
})
export class CashFlowStatementComponent implements OnInit {

  public selectedRadio: string = 'yearData';
  // 初始顯示table
  public slideToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeSlideToggle(event: any): void {
    this.slideToggle = event.target.checked;
  }

}
