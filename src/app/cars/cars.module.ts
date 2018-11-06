import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import {RouterModule, Routes} from '@angular/router';



export const routes: Routes = [
  {path: '', component: CarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarComponent]
})
export class CarsModule { }
