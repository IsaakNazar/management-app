import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  @Input() isShow: boolean = false
  @Output() onClose = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.isShow = false
    this.onClose.emit(false)
  }

}
