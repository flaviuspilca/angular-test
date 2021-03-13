import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'nav-dropdown',
  templateUrl: './nav-dropdown.component.html'
})
export class NavDropdownComponent {

  @Output() navEvent = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  moveTo(param){
    this.navEvent.emit(param);
    this.router.navigate(["/"+param]);
  }
}
