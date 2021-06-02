import { Component, OnInit, ViewChild } from '@angular/core';
import { ClubService } from 'src/app/club.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

// tslint:disable-next-line: class-name
export interface userDetails {
  id: number;
  FirstName: string;
  LastName: string;
  ContactNumber: number;
  Email: string;
  Password: string;
  UserType: string;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  // dataSource: any;
  constructor(private service: ClubService) { }
  userForm: any;

  dataSource!: MatTableDataSource<userDetails>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'ContactNumber', 'Email', 'Password', 'Address', 'UserType', 'Edit', 'Delete'];
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
      console.log('Users----', res);
      this.dataSource.paginator = this.paginator;
    });

  }
  deleteUser(data: any): void{
    this.service.deleteUser(data).subscribe(() => {
      this.getAllUser();
      console.log('User Deleted');
    });
  }
}
