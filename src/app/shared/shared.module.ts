import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { HttpClientModule } from "@angular/common/http";
import { BtnTextComponent } from './components/btn-text/btn-text.component';
import { BtnSmartComponent } from './components/btn-smart/btn-smart.component';


@NgModule({
  declarations: [
    ConfirmPopupComponent,
    BtnTextComponent,
    BtnSmartComponent,
  ],
  exports: [
    ConfirmPopupComponent,
    BtnSmartComponent,
    BtnTextComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
