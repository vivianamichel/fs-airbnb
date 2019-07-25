import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { NavController } from '@ionic/angular';
import { HttpResponse } from '../models/http-response'; 
import { Property } from '../models/property'; 

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  // property: Property = new Property();
  constructor(private http: HttpClient, private navController: NavController) { }

  createProperty(prop: Property) {
    console.log("hello title "+ prop.title);
    this.http.post('http://localhost:5000/api/properties/create-property', {
      property: prop}).subscribe((response) => {
      console.log(response);
    });
  }
}
