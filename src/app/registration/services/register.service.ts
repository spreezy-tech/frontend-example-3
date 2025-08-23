import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  randomNumberSender !: Observable<number>;
  constructor() { }


  sample(): void {
    console.log("Dependency injection example");
  }

  generateRandomNumber() : void {
    this.randomNumberSender = new Observable(sender => sender.next(Math.random()));
  }


  addUser(): void{
    console.log('Add user to backend');
  }

  updateUser(): void{
    console.log('Update user to backend');
  }

  deleteUser(): void{
    console.log('Delete user in backend');
  }
}
