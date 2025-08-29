import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistrationRequest } from '../model/registration-request';
import { RegistrationResponse } from '../model/registration-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  randomNumberSender !: Observable<number>;
  randomNumberSubject = new BehaviorSubject<number>(5);

  constructor(private http : HttpClient) { 
    this.randomNumberSender = new Observable(sender => sender.next(Math.random()));
  }


  sample(): void {
    console.log("Dependency injection example");
  }

  generateRandomNumber() : void {
    this.randomNumberSubject.next(Math.random());
  }

  getText() : Observable<string> {
    const url = environment.backendURL + environment.api.test;
    return this.http.get(url,{
      responseType: 'text'
    });
  }

  sendDetails(registrationRequest : RegistrationRequest) : Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(environment.backendURL + environment.api.userCreate, registrationRequest, {
      responseType: 'json'
    });
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
