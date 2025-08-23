import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetails } from '../model/employee-details';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  @Input() employee !: EmployeeDetails;
  @Output() visibilityEvent = new EventEmitter<EmployeeDetails>();

  sendClickEvent(employee : EmployeeDetails) : void {
    console.log("child level : " + employee.name);
    this.visibilityEvent.emit(employee);
  }
}
