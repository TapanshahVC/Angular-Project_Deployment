import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left'];
  // tslint:disable-next-line:typedef
  public position = new FormControl(this.positionOptions[0]);

  constructor(private router: Router) { }
  pfn: any = '';
  ngOnInit(): void {
    const profile = localStorage.getItem('pfname');
    this.pfn = profile;
  }
  logout(): void{
    this.router.navigate([`${'signin'}`]);
    localStorage.clear();
  }
}
