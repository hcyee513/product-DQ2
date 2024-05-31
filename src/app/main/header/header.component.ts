import { Subscription } from 'rxjs';
import { HeaderService } from './header.service';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private subscription!: Subscription;

  public title: string = '';
  public isNavPanelOpen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIsMobileView();
  }

  constructor(private headerService: HeaderService) {
    this.subscription = this.headerService.currentTitle.subscribe(title => {
      this.title = title;
      console.log(this.title)
    })
  }

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

  public onItemTitleClick(title: string) {
    console.log(title)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
