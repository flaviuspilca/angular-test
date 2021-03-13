import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  @Input() isAuthenticated: Boolean;
  @Input() currentRoute: String;
  @Input() potatoes: Array<Object>;

  constructor() {}


  ngOnInit() {
  }

}
