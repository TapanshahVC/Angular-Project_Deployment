import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthModule } from './authentication/authentication.module';
// import { NavbarComponent } from './auth/navbar/navbar.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {AdminlistComponent} from './admin/adminlist/adminlist.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {UserlistComponent} from './admin/userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { UserdashComponent } from './user/userdash/userdash.component';
import { UserlistingComponent } from './user/userlisting/userlisting.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'app-admin',
  component: AdminComponent, canActivate: [AuthGuard],
  children: [
    {
      path: 'admin-list',
      component: AdminlistComponent
    },
    {
      path: 'user-list',
      component: UserlistComponent
    },
    {
      path : 'home',
      component: DashboardComponent
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    },
  ]
},
    {
      path: 'app-user',
      component: UserComponent, canActivate: [AuthGuard],
      children: [
        {
          path: 'userhome',
          component: UserdashComponent
      },
      {
        path: 'userlist',
        component: UserlistingComponent
      },
      {
        path: '**',
        redirectTo: 'userhome',
        pathMatch: 'full'
      }
      ]
    }];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
