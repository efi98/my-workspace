import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { OneComponent } from './one/one.component';
import { TowComponent } from './tow/tow.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [{
      path: '',
      loadChildren: () =>
      import('projects/my-app/external/external.module').then((m) => m.ExternalModule)
    }]
  },
 /*  {
    path: 'first',
    loadChildren: () =>
      import('projects/my-app/external/external.module').then((m) => m.ExternalModule)
  }, */
  {
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path:'one',
        component: OneComponent
      },
      {
        path:'tow',
        component: TowComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  },
  {
    path: '**',
    redirectTo: 'first'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
