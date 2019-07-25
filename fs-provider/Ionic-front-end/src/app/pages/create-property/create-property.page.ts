import { Component, OnInit } from '@angular/core';
import  { Property } from '../../models/property';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {

  property: Property = new Property();

  constructor(private propertyService: PropertyService ,private navController: NavController) { }
  

  ngOnInit() {
  }

createNewProperty(){
    this.propertyService.createProperty(this.property);
}
}

