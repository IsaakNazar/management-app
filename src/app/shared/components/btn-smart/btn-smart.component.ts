import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-smart',
  templateUrl: './btn-smart.component.html',
  styleUrls: ['./btn-smart.component.scss']
})
export class BtnSmartComponent {

  @Input() icon = ''
  @Input() disabled = false

  get url(): string {
    return `../../../../assets/images/${this.icon}.png`
  }

}
