import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string = '戰情室'; 
  public isNavPanelOpen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIsMobileView();
  }

  constructor() { }

  ngOnInit(): void {
  }

  private checkIsMobileView() {
    if (this.isNavPanelOpen) {
      this.isNavPanelOpen = window.innerWidth <= 768;
    }
  }

  public toggleNavPanel() {
    this.isNavPanelOpen = !this.isNavPanelOpen;
  }
}
