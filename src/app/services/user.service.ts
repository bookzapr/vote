import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'YOUR_API_URL_HERE'; // ใส่ URL ของ API ของคุณที่นี่

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    };

    return this.http.post(`http://localhost:3000/login/signin`, data);
  }
}


