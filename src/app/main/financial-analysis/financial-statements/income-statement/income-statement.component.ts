import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {

  public selectedRadio: string = 'yearData';
  // 初始顯示table
  public slideToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public changeSlideToggle(event: any):void {
    this.slideToggle = event.target.checked;
  }

}
