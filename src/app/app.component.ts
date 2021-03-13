import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  userStatus = localStorage.userName ? localStorage.userName.length > 0 : false; // initial state of the user: logged out
  currentRoute = "";
  potatoes: any = [];


  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(){
    this.httpClient.get("assets/potato_sales.json").subscribe(data =>{
      this.potatoes = data;
    })
  }

  loginMessage(status) {
    this.userStatus = status;
  }

  getCurrentRoute(route){
    this.currentRoute = route;
  }

  logout() {
    this.userStatus = false;
    localStorage.removeItem("userName");
    this.router.navigate(['/']);
    this.currentRoute = "/";
  }
}
