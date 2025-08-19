import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name: string = 'Sarthak';
  imgUrl: string =  'https://nextgen-images.cdn.dealersolutions.com.au/modular.multisite.dealer.solutions/wp-content/uploads/sites/1587/2020/08/31144918/Multi-Colour-Coupe-1200x675.jpg?format=webp&width=1200';
  username : string = ''; 
  // registerService: RegisterService = new RegisterService();

  user = {
    name : '',
    email : ''
  };

  employees = [
    { name: 'Ved', age: 25, salary: 50000, isVisible: true },
    { name: 'Poojita', age: 30, salary: 60000, isVisible: true },
    { name: 'Kaivallya', age: 28, salary: 55000, isVisible: true }
  ];

  constructor(private registerService: RegisterService) {
    this.name = 'Ved';
    registerService.sample();
  }

  updateName() : void {
    this.name = 'John';
    this.registerService.updateUser();
  }

  toggleVisibility(index : number) : void{
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }

  onSubmit(form : NgForm) : void{
    console.log(form);
    console.log(form.value["name"]);

    if(form.valid){
      console.log("User details");
      console.log(form.controls['username'].value); 
    }
    console.log(form.control.get('name'));
  }
}


