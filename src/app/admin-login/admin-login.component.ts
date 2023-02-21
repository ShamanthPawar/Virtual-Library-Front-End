import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(public authenticationService: AuthenticationService) {}
}