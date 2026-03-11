// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http : HttpClient){}

  getUsers() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  createrUser(data : any) : Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/users', data)
  }

  editUser(id : number) : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ id)
  }

  userDelete(id : number) : Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+ id)
  }

}
