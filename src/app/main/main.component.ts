import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public hidden: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/main/home') {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    })
   }

  ngOnInit(): void {
  }

  public onModeChange(isClicked: boolean) {
    var body = document.body;
    if (body.hasAttribute('data-bs-theme') && !isClicked) {
        body.removeAttribute('data-bs-theme');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
  }

}
