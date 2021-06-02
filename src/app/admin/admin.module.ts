import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AdminComponent, AdminlistComponent, UserlistComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports:  [],
})
export class AdminModule { }
