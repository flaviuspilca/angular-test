import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})


export class QuestionViewComponent implements OnInit {

  @Input() isOwner: String;

  constructor(private fb: FormBuilder) { }

  questionForm: FormGroup;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;



  ngOnInit() {
    this.questionForm = this.fb.group({
      text: [""],
      variants: this.fb.array([this.fb.group({variant:''})])
    });
  }

  get variants() {
    return this.questionForm.get('variants') as FormArray;
  }

  addVariant() {
    this.variants.push(this.fb.group({variant:''}));
  }

  deleteVariant(index) {
    this.variants.removeAt(index);
  }

  validateForm() {

  }

  resetForm() {

  }
}
