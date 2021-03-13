import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    productName: ['', Validators.required],
    productId: ['', Validators.required],
    productManager: [''],
    saleDate: ['', Validators.required]
  });


  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form is submitted!');
    console.warn(this.profileForm.value);
  }

}
