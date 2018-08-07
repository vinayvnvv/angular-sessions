import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit  {
  
  country: Country[] = [];
  add: boolean = true;
  loginForm;


  constructor(
      private fb: FormBuilder
    ) { }

  ngOnInit() {
  	console.log('init')
  	this.country = [
  						{name: 'india', id: 2},
  						{name: 'usa', id: 3}
  					];
    this.initForm();
  }


  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })

    console.log(this.loginForm)
  }


  ngAfterViewInit() {
  	console.log('view inited')
  }

  // showDiv() {
  // 	this.show = true;
  // }
  // hideDiv() {
  // 	this.show = false;
  // }\


  selectRow(i, odd) {
  	alert(i + 'type: ' + odd)
  }

  

}

class Country {
	name: string;
	id: number;
}