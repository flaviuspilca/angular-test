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
  isValid = false;
  formInit = true;

  ngOnInit() {
    this.questionForm = this.fb.group({
      text: ["", Validators.required],
      variants: this.fb.array([this.fb.group({variant:'', checked: false})])
    });

    this.onChanges();
  }

  onChanges(): void {
    this.formInit = true;
    this.questionForm.valueChanges.subscribe(val => {
      if( val.text.trim().length === 0 ) this.questionForm.get("text").setValue(val.text.trim(), { emitEvent: false })
      for( let i=0; i<val.variants.length; i++ ){
        if( val.variants[i].variant.trim().length === 0 ) this.questionForm.get("variants."+i+".variant").setValue(val.variants[i].variant.trim(), { emitEvent: false })
      }

      if( val.text.trim().length > 0 && val.variants.length > 1){
        if( val.variants.filter(item => {return item.variant.trim().length === 0}).length > 0 ) {
          this.isValid = false;
          this.toPublish = false;
        }
        else this.isValid = true;
      }else{
        this.isValid = false;
        this.toPublish = false;
      }
    });
  }

  get variants() {
    return this.questionForm.get('variants') as FormArray;
  }

  addVariant() {
    this.variants.push(this.fb.group({variant:'', checked: false}));
  }

  deleteVariant(index) {
    this.variants.removeAt(index);
  }

  publishForm() {
    this.toPublish = this.isValid;
    this.formInit = this.isValid;
  }

  resetForm() {
    this.questionForm = this.fb.group({
      text: [""],
      variants: this.fb.array([this.fb.group({variant:'', checked: false})])
    });
    this.onChanges();
    this.toPublish = false;
    this.isValid = false;
  }

  selectOption(index) {
    let selectedItem = this.questionForm.value.variants.findIndex(item => item.checked === true);
    if( selectedItem > -1 && selectedItem !== index ) {
      this.questionForm.get("variants."+selectedItem+".checked").setValue(false);
    }
    this.questionForm.get("variants."+index+".checked").setValue(true);
  }

  vote() {

  }

}
