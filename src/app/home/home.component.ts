import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userSideNavItems = [
    {
      number: '1',
      name: 'Home',
      icon: 'Home',
      activeIcon: 'ri-home-2-fill',
    },
    {
      number: '2',
      name: 'Continue',
      icon: 'resume',
      activeIcon: 'ri-git-repository-fill',
    },
    {
      number: '3',
      name: 'History',
      icon: 'History',
      activeIcon: 'ri-history-fill',
    },
    {
      number: '4',
      name: 'Read later',
      icon: 'bookmarks',
      activeIcon: 'bookmarks-fill',
    },
    {
      number: '5',
      name: 'About',
      icon: 'help',
      activeIcon: 'ri-question-fill',
    }
  ];

  selectedMenu:any='Home';
  goTo(paramText:String){
    this.selectedMenu=paramText;
    console.log(paramText);
  }

}
