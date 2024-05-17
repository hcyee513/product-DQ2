import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {
  
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
