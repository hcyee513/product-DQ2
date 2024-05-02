import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { SituationRoomComponent } from './financial-analysis/situation-room/situation-room.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SituationRoomComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
