import { UIModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './sections/header/header.component';
import { CardsComponent } from './sections/cards/cards.component';
import { BannersComponent } from './sections/banners/banners.component';
import { TabsComponent } from './sections/tabs/tabs.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, CardsComponent, BannersComponent, TabsComponent, ContactsComponent, HomeComponent],
  imports: [
    CommonModule,
    UIModule
  ],
  exports: [HomeComponent]
})
export class LandingModule { }
