import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
  toPublish = false;


  ngOnInit() {
    this.questionForm = this.fb.group({
      text: ["", Validators.required],
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

  publishForm() {
    if( !this.questionForm.invalid ) this.toPublish = true;
  }

  resetForm() {
    this.questionForm = this.fb.group({
      text: [""],
      variants: this.fb.array([this.fb.group({variant:''})])
    });
    this.toPublish = false;
  }

}
