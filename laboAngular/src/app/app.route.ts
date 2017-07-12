import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './component/modules/modules.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { StatComponent } from './component/stat/stat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'modules',
    component: ModulesComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'list',
    component: ListComponent
  },{
    path: 'stat',
    component: StatComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
