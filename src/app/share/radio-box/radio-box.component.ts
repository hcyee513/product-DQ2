import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css']
})
export class RadioBoxComponent implements OnInit {

  @Input() radioName: string = '';
  @Input() isActive!: boolean | null;
  @Input() id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
