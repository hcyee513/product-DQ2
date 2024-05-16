import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit {

  @Input() public labelName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
