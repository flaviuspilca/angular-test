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
  toPublish = false;
  isValid = false;
  formInit = true;
  chosenOption = null;
  votes = 0;

  ngOnInit() {
    this.questionForm = this.fb.group({
      text: [""],
      variants: this.fb.array([this.fb.group({variant:'', checked: false, counter: 0})])
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
    this.variants.push(this.fb.group({variant:'', checked: false, counter: 0}));
  }

  deleteVariant(index) {
    let selectedItem = this.questionForm.value.variants.findIndex(item => item.checked === true);
    if( selectedItem > -1 ) this.questionForm.get("variants."+selectedItem+".checked").setValue(false);
    this.votes = this.votes - this.questionForm.get('variants.'+index+'.counter').value;
    this.variants.removeAt(index);
  }

  publishForm() {
    this.toPublish = this.isValid;
    this.formInit = this.isValid;
  }

  resetForm() {
    this.questionForm = this.fb.group({
      text: [""],
      variants: this.fb.array([this.fb.group({variant:'', checked: false, counter: 0})])
    });
    this.onChanges();
    this.toPublish = false;
    this.isValid = false;
    this.chosenOption = null;
    this.votes = 0;
  }

  selectOption(index) {
    let selectedItem = this.questionForm.value.variants.findIndex(item => item.checked === true);
    if( selectedItem > -1 && selectedItem !== index ) {
      this.questionForm.get("variants."+selectedItem+".checked").setValue(false);
    }
    this.questionForm.get("variants."+index+".checked").setValue(true);
    this.chosenOption = index;
  }

  vote() {
    if( this.chosenOption !== null ) {
      this.questionForm.get("variants."+this.chosenOption+".counter").setValue(this.questionForm.get("variants."+this.chosenOption+".counter").value+1);
      this.votes++;
      let selectedItem = this.questionForm.value.variants.findIndex(item => item.checked === true);
      if( selectedItem > -1 ) {
        this.questionForm.get("variants."+selectedItem+".checked").setValue(false);
      }
      this.chosenOption = null;
    }
  }

}
