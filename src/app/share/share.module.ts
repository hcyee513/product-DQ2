import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent,
    DialogModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropDownListComponent,
    RadioBoxComponent,
    OrganizationChartComponent,
    DialogModalComponent,
  ]
})
export class ShareModule { }
