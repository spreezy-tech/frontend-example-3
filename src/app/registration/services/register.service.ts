import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }


  sample(): void {
    console.log("Dependency injection example");
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
