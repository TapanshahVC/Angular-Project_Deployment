import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [{
  path: 'app-admin',
  component: AdminComponent,
},
];
// children: [
//   {
//     path: 'admin-list',
//     component: AdminlistComponent
//   },
//   {
//     path: 'user-list',
//     component: UserlistComponent
//   }
// ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
