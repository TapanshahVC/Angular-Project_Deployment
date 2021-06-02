import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  delete = 'http://localhost:8000/userlist';
  navbar: any;

  constructor(private http: HttpClient) { }
  userDel = '/admin-list';


  createUser(data: any): any{
    return this.http.post('http://localhost:8000/user', data);
  }
  loginUser(data: object): any{
    return this.http.post('http://localhost:8000/signin', data);
  }
  getAllUser(): any{
    return this.http.get('http://localhost:8000/userlist');
  }
  gettoken(): any {
    return !!localStorage.getItem('Token');
  }
  deleteUser(id: any): any{
    return this.http.delete(`${this.delete}/${id}`);
  }
}
