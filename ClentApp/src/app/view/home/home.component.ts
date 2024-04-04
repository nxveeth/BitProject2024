import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userspecmessages: any[] = [
    {name: 'naveeth@briscabpo.com', updated: new Date('5/30/23')},
    {name: 'manoj@briscabpo.com', updated: new Date('5/17/23')},
    {name: 'nithini@briscabpo.com', updated: new Date('5/28/23')},
    {name: 'aruna@briscabpo.com', updated: new Date('4/28/23')},
  ];

  generalmessages: any[] = [
    {name: 'hr@briscabpo.com', updated: new Date('5/30/23')},
    {name: 'admin@briscabpo.com', updated: new Date('5/17/23')},
    {name: 'it@briscabpo.com', updated: new Date('5/28/23')},
    {name: 'onboarding@briscabpo.com', updated: new Date('4/28/23')}
  ];
}
