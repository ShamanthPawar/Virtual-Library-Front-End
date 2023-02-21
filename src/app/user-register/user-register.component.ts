import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
