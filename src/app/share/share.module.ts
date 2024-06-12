import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';



@NgModule({
  declarations: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent
  ]
})
export class ShareModule { }
