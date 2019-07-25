import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AuthenticationService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  httpOptions: { 
    headers: HttpHeaders
  };

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getListings(): any {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authenticationService.getToken() 
      })
    };
    return this.http.get('http://localhost:5000/api/listings', this.httpOptions); 
  }

}
