import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  public title: string = '';
  public value: number = 0;

  public valueControl = new FormControl(null);

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.valueControl.setValue(this.value);
  }

  cancel() {
    this.activeModal.dismiss();
  }

  certain() {
    this.activeModal.close(this.valueControl.value);
  }

}
