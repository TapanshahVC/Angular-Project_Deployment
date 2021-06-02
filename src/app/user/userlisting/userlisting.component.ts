import { Component, OnInit, ViewChild } from '@angular/core';
import {ClubService} from 'src/app/club.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

// tslint:disable-next-line: class-name
export interface userDetails {
  id: number;
  FirstName: string;
  LirstName: string;
  ContactNumber: number;
  Email: string;
  Password: string;
  UserType: string;
}

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent implements OnInit {

  userForm: any;
  dataSource: any;
  constructor(private service: ClubService) { }

//   dataSource!: MatTableDataSource<userDetails>;
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'ContactNumber', 'Email', 'Password', 'Address', 'UserType'];
  userData: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): any {
    this.getAllUser();
  }
  getAllUser(): void{
    this.service.getAllUser().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<userDetails>(res);
      this.dataSource.filter = 'user';
      console.log(this.dataSource);
      console.log('res----', res);
      console.log('paginator', this.dataSource);
      this.dataSource.paginator = this.paginator;
    });

  }
}
