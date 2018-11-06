import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './computer/computer.component';
import {RouterModule, Routes} from '@angular/router';


export const routes: Routes = [
  {path: '', component: ComputerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComputerComponent]
})
export class ComputersModule { }
