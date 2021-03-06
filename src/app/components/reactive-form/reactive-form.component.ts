import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country, ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private api: ApiService) {
    this.countryNames = this.api.getCountries();
  }
  countryNames: Observable<Country[]>;

  reactiveForm!: FormGroup;

  successful: Array<string> = ['yes', 'no'];
  occupations: Array<string> = [
    'Frontend Developer',
    'Backend Developer',
    'Designer',
    'DevOps Engineer',
  ];
  allCountries: Array<string> = ['a', 'b'];

  onSubmit() {
    console.log(this.reactiveForm);
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl('', Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$'),
      ]),
      phone: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl('b'),
      occupation: new FormControl('developer'),
      success: new FormControl('yes'),
    });
  }

  /*validatePassword(control:FormControl):{[s: string]: boolean} {
    if(1 ==1) {
      return {"Invalid password": true}
    }
  }*/
}
