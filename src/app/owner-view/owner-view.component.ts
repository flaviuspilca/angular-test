import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'owner-view',
  templateUrl: './owner-view.component.html',
  styleUrls: ['./owner-view.component.css']
})
export class OwnerViewComponent implements OnInit {

  questionText = new FormControl('');
  validQuestion : Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  publishQuestion(validForm) {
    this.validQuestion = !validForm;
    return this.validQuestion;
  }

  resetQuestion() {
    this.questionText.setValue('');
    this.validQuestion = false;
  }

}
