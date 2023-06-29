import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external/external.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { ExternalRoutingModule } from './external-routing.module';



@NgModule({
  declarations: [
    ExternalComponent,
    Ex1Component,
    Ex2Component
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule
  ],
  exports: [ExternalComponent]
})
export class ExternalModule { }
