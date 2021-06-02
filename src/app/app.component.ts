import { Component, OnInit } from '@angular/core';
import {ClubService} from './club.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task2';
  navbar: any;
  constructor(public service: ClubService) {}
  ngOnInit(): void{
    this.service.navbar = true;
    this.navbar = this.service.navbar;
  }
}
