import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    ConfirmPopupComponent,
  ],
  exports: [
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
