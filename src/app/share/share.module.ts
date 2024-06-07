import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';



@NgModule({
  declarations: [
    DropDownListComponent,
    RadioBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropDownListComponent,
    RadioBoxComponent,
  ]
})
export class ShareModule { }
