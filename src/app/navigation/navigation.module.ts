import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ButtonsModule } from 'app/buttons/buttons.module';
import { LineComponent } from './line/line.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [MenuComponent, LineComponent],
  exports: [MenuComponent, ButtonsModule]
})
export class NavigationModule { }
