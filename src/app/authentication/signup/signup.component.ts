import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { ClubService } from 'src/app/club.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AdminModule } from 'src/app/admin/admin.module';
import { SigninComponent } from '../signin/signin.component';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  userData: any;
  email: any;
  emailAuth: any;
  flag = true;
  e: any;

  constructor(private tostr: ToastrService, private service: ClubService, private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm): any {
    this.service.createUser(userForm).subscribe((res: any) => {
      this.userData = res;
      console.log('Data Added', userForm);
      console.log('Data Added', res.status);
      if (res.status === 400) {
        console.log('User Exist');
      }
      else
      {
        console.log('Data Added', userForm);
        this.router.navigate([`${'signin'}`]);
      }
    });
  }
}
