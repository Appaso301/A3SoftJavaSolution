import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Import throwError
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  private baseUrl = 'http://localhost:80/login';  // Adjust the URL according to your Spring Boot backend

  constructor(private http: HttpClient) {}

  // Function to call the backend API for login validation
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    const body = {
      email: email,
      password: password
    };
    
    return this.http.post(`${this.baseUrl}/validate`, body, { headers: headers })
      .pipe(
        catchError(this.handleError) // Use catchError for error handling
      );
  }

  // Error handling function
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error.message || 'Server error');  // Replace Observable.throw with throwError
  }
}
