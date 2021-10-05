import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;

  successful: Array<string> = ['yes', 'no'];
  occupations: Array<string> = ['designer', 'developer'];
  allCountries: Array<string> = ['a', 'b'];

  onSubmit() {
    console.log(this.reactiveForm);
  }
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('Ade'),
      lastname: new FormControl('Kams'),
      password: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl('b'),
      occupation: new FormControl('developer'),
      success: new FormControl('yes'),
    });
  }
}
