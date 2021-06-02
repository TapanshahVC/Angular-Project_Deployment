import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/club.service';
import { AdminlistComponent } from 'src/app/admin/adminlist/adminlist.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { AdminComponent } from 'src/app/admin/admin.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide = true;
  email: any;
  password: any;
  userData: any;
  constructor(private toastr: ToastrService, private router: Router, private service: ClubService) { }

  ngOnInit(): void {
  }
  onSubmit(data: NgForm): any {
    this.service.loginUser(data).subscribe((res: any) => {
      this.userData = res;
      if (res.status === 401) {
        console.log('status----', res.status);
        this.toastr.error('Email and Password is Incorrect');
      }
      else {
        this.service.navbar = false;
        console.log('Navbar', this.service.navbar);
        if (res.user.UserType === 'user') {
          this.router.navigate([`${'app-user'}`]);
          console.log('Token', res.token);
          this.service.navbar = false;
          console.log('Navbar', this.service.navbar);
        }
        else if (res.user.UserType === 'admin') {
          console.log('Token', res.token);
          this.router.navigate([`${'app-admin'}`]);
          this.service.navbar = false;
          console.log('Navbar', this.service.navbar);
        }
      }
      console.log(res.user.FirstName);
      localStorage.setItem('Token', JSON.stringify(res.token));
      localStorage.setItem('pfname', (res.user.FirstName));
      localStorage.setItem('plname', (res.user.LastName));
      localStorage.setItem('pnumber', (res.user.ContactNumber));
      localStorage.setItem('paddress', (res.user.Address));
      localStorage.setItem('pemail', (res.user.Email));
      localStorage.setItem('pid', (res.user.id));
      });
  }
}
