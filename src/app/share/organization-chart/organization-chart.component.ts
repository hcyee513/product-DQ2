import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.css']
})
export class OrganizationChartComponent implements OnInit {

  public level5 = [
    { type: '營業收入', value: 0, operation: '-' },
    { type: '營業成本', value: 0, operation: '-' },
    { type: '推銷費用', value: 0, operation: '-' },
    { type: '管理費用', value: 0, operation: '-' },
    { type: '研發費用', value: 0, operation: '+' },
  ]

  constructor(private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  public openDialog(index: number):void {
    const modalRef = this.modalService.open(DialogModalComponent);
    modalRef.componentInstance.title = this.level5[index].type;
    modalRef.componentInstance.value = this.level5[index].value;

    // 關閉後呼叫
    modalRef.result.then((result) => {
      if (result !== undefined) {
        this.level5[index].value = result;
      }
    }, (reason) => {
      console.log(`Dismissed: ${reason}`);
    });
  }

  public changeValue(operation: string, index: number): void{
    if (operation === '+') {
      console.log(this.level5[index].value)
      this.level5[index].value++;
    } else if (operation === '-') {
      this.level5[index].value--;
    }
  }

}
