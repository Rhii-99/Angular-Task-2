import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((result: any) => result.data));
  }
  addUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
  getUserList(): Observable<User[]>{
    // console.log(this.http.get<User[]>(`${this.baseUrl}`));
    return this.http.get<User[]>(`${this.baseUrl}`).pipe(map((result: any) => result.data));
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
     responseType: 'text',
    });
  }

}
