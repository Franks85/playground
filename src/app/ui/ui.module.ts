import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navigation/components/navbar/navbar.component';
import { FooterComponent } from './navigation/components/footer/footer.component';
import { ActionBtnComponent } from './shared/action-btn/action-btn.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ActionBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent, ActionBtnComponent]
})
export class UIModule { }
