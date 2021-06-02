import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {} from '../admin/admin.module';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'admin',
  component : AdminComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class AuthenticationRoutingModule { }
