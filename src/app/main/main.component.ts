import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public headerHiden: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/main/home') {
        this.headerHiden = true;
      } else {
        this.headerHiden = false;
      }
    })
   }

  ngOnInit(): void {
  }

}
