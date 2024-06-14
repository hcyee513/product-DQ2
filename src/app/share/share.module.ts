import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LineColumnChartComponent } from './line-column-chart/line-column-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent,
    DialogModalComponent,
    LineColumnChartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  exports: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent,
    DialogModalComponent,
    LineColumnChartComponent,
  ]
})
export class ShareModule { }
