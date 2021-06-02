import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserlistingComponent} from './userlisting/userlisting.component';
import {UserdashComponent} from './userdash/userdash.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [UserComponent, UserlistingComponent, UserdashComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule
  ]
})
export class UserModule { }
