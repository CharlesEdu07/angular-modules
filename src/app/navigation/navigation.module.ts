import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonsModule } from 'app/buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class NavigationModule { }
