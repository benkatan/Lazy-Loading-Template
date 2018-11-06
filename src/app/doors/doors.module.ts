import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './door/door.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', component: DoorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoorComponent]
})
export class DoorsModule { }
