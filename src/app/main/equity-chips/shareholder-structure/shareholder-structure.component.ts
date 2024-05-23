import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareholder-structure',
  templateUrl: './shareholder-structure.component.html',
  styleUrls: ['./shareholder-structure.component.css']
})
export class ShareholderStructureComponent implements OnInit {

  public selectedRadio: string = 'dynamic-wall';
  constructor() { }

  ngOnInit(): void {
  }

  public search() {
    console.log('search!')
  }
}
