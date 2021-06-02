import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public positionOptions: TooltipPosition[] = ['left'];
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
