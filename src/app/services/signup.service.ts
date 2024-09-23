import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Import throwError
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = 'http://localhost:80/signUp'; 
  constructor(private http: HttpClient) {}
  signUp(signUpBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   
  return this.http.post(`${this.baseUrl}/save`, signUpBody, { headers: headers })
  .pipe(
    catchError(this.handleError) // Use catchError for error handling
  );
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error.message || 'Server error'); 
}
}