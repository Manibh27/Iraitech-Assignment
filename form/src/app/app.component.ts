import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form';
  productForm: FormGroup;
  mobileNumbers = this.fb.array([this.fb.group({point: ''})]);

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      mobile_numbers: this.mobileNumbers
    });
  }

  addNumber() {
    this.mobileNumbers.push(this.fb.group({point: ''}));
  }

  deleteNumber(index) {
    this.mobileNumbers.removeAt(index);
  }

  showMobileNumbers() {
    console.log('-----', this.productForm.value);
  }
}
