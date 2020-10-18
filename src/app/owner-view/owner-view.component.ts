import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'owner-view',
  templateUrl: './owner-view.component.html',
  styleUrls: ['./owner-view.component.css']
})


export class OwnerViewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  questionForm: FormGroup;

  ngOnInit() {
    this.questionForm = this.fb.group({
      text: [],
      variants: this.fb.array([this.fb.group({point:''})])
    })
  }

  get variants() {
    return this.questionForm.get('variants') as FormArray;
  }

  addVariant() {
    this.variants.push(this.fb.group({point:''}));
  }

  deleteVariant(index) {
    this.variants.removeAt(index);
  }


}
