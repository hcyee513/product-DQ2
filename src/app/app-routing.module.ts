import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/main/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
