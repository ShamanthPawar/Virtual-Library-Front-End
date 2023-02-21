import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
