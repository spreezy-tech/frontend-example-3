import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from '../model/employee-details';
import { Router } from '@angular/router';
import { RegistrationRequest } from '../model/registration-request';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name: string = 'Sarthak';
  imgUrl: string =  'https://nextgen-images.cdn.dealersolutions.com.au/modular.multisite.dealer.solutions/wp-content/uploads/sites/1587/2020/08/31144918/Multi-Colour-Coupe-1200x675.jpg?format=webp&width=1200';
  username : string = ''; 
  currentNumberObservable : number = 0;
  currentNumberSubject : number = 0;
  apiResponse : string = "";
  request !: RegistrationRequest;
  // registerService: RegisterService = new RegisterService();

  user = {
    name : '',
    email : ''
  };

  employees : EmployeeDetails[] = [
    { name: 'Ved', age: 25, salary: 50000, isVisible: true },
    { name: 'Poojita', age: 30, salary: 60000, isVisible: true },
    { name: 'Kaivallya', age: 28, salary: 55000, isVisible: true }
  ];

  constructor(private registerService: RegisterService, private router :Router) {
    this.name = 'Ved';
    registerService.sample();
    this.registerService.randomNumberSender?.subscribe(value => this.currentNumberObservable = value);
    this.registerService.randomNumberSubject.subscribe(value => this.currentNumberSubject = value);
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

  updateRandomNumber() : void {
    this.registerService.generateRandomNumber();
    
  }

  triggerAPI() : void {
    // this.apiResponse = this.registerService.getText();
    // console.log(this.apiResponse);

    this.registerService.getText()
    .subscribe({
      next: (response) => {
        console.log("API response : " + response);
        this.apiResponse = response;
      },
      error: (err) => {
        console.log("Error : "+err);
      },
      complete: () => {
        console.log("API call completed");
      }
    });
  }

  createAPI() : void {
    this.request = new RegistrationRequest();
    this.request.name = "Sarthak";
    this.request.email = "abc@xyz.com";
    this.request.phoneNumber = "1234567890";
    this.request.password = "sample456";

    this.registerService.sendDetails(this.request)
    .subscribe({
      next: (response) => {
        console.log("API response : " + response.operation + " " + response.success);
        this.apiResponse = response.operation;
      },
      error: (err) => {
        console.log("Error : "+err);
      },
      complete: () => {
        console.log("API call completed");
      }
    });
  }


  receiveEvent(employee : EmployeeDetails) : void {
    console.log("Parent level : " + employee.name);
    const currentEmployee = this.employees.find(emp => emp.name === employee.name);
    if(currentEmployee){
      currentEmployee.isVisible = !currentEmployee.isVisible;
    }

    this.router.navigate(['/booking']);
  }
}


