import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'cars', loadChildren: './cars/cars.module#CarsModule'},
  {path: 'computer', loadChildren: './computers/computers.module#ComputersModule'},
  {path: 'doors', loadChildren: './doors/doors.module#DoorsModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
