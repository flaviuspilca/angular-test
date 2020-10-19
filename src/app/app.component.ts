import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type UserType = 'owner' | 'respondent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userType : UserType = 'owner';



  toggleUserProfile(type: UserType) {
    this.userType = type;
  }
}
