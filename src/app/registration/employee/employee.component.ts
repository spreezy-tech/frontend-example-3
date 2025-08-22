import { Component, Input } from '@angular/core';
import { EmployeeDetails } from '../model/employee-details';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  @Input() employee !: EmployeeDetails;
}
