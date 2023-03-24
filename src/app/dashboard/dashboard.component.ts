import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  adminSideNavItems = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'dashboard',
      activeIcon: 'ri-dashboard-fill',
    },
    {
      number: '2',
      name: 'Books',
      icon: 'menu_book',
      activeIcon: 'ri-book-2-fill',
    },
    {
      number: '3',
      name: 'Users',
      icon: 'group',
      activeIcon: 'ri-user-fill',
    },
    {
      number: '4',
      name: 'Settings',
      icon: 'settings',
      activeIcon: 'ri-settings-3-fill',
    }
  ];

  selectedMenu:any='Dashboard';
  goTo(paramText:String){
    this.selectedMenu=paramText;
    console.log(paramText);
  }
}
