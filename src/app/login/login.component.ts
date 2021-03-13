import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  @Input() isAuthenticated: Boolean;
  @Output() loginEvent = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}




  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.onChanges();
  }

  get f() { return this.loginForm.controls; }

  onChanges(): void {
  }

  loginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else{
      this.isAuthenticated = true;
      this.loginEvent.emit(this.isAuthenticated);
      localStorage.setItem("userName", this.loginForm.value.username);
      this.router.navigate(["/welcome"]);
      this.loginForm.reset()
    }
  }

}
