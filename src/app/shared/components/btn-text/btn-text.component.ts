import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn-text',
  templateUrl: './btn-text.component.html',
  styleUrls: ['./btn-text.component.scss']
})
export class BtnTextComponent implements OnInit {

  @Input() label: 'cancel' | 'save' | 'delete' = 'cancel'
  @Input() disabled = false
  constructor() { }

  ngOnInit(): void {
  }

}
