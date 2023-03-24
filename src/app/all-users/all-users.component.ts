import { Component } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  searchtxt: any;
  public userList = [
    {
      username:'aaa',
      emailAddress:'aaa@cognizant.com',
    },
    {
      username:'bbb',
      emailAddress:'bbb@cognizant.com',
    },
    {
      username:'abc',
      emailAddress:'abc@cognizant.com',
    }
  ];
  // console.log();
  
}
