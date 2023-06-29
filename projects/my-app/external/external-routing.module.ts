import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { ExternalComponent } from './external/external.component';

const routes: Routes = [
  // {
    // path: '',
    // component: ExternalComponent,
    // children: [
      // {
      //   path: 'ex1',
      //   component: Ex1Component,
      // },
      // {
      //   path: 'ex2',
      //   component: Ex2Component,
      // },
    // ],
  // },
  {
    path: 'ex1',
    component: Ex1Component,
  },
  {
    path: 'ex2',
    component: Ex2Component,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ex1'
  },
  {
    path: '**',
    redirectTo: 'ex1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalRoutingModule {}
