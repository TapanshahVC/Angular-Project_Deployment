import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ClubService } from 'src/app/club.service';
import {DataSource} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
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
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {

  constructor(private service: ClubService) { }
  dataSource!: MatTableDataSource<userDetails>;
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'ContactNumber', 'Email', 'Address', 'UserType', 'Edit', 'Delete'];
  userData: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): any {
    this.getAllUser();
  }
  getAllUser(): void {
    this.service.getAllUser().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<userDetails>(res);
      this.dataSource.filter = 'admin';
      console.log('res----', res);
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
