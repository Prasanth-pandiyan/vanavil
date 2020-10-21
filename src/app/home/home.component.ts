import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myForm: FormGroup;
  public signup: FormGroup;
  public doantedata: any = {};

  constructor(private fb: FormBuilder, public app: ApiService, public router: Router,) {
    this.myForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      mobilno: this.fb.control('', Validators.required),
      whatsappno: this.fb.control('', Validators.required),
      companyname: this.fb.control('', Validators.required),
      bankname: this.fb.control('', Validators.required),
      currentcity: this.fb.control('', Validators.required),
      citizenship: this.fb.control('', Validators.required),
      currently: this.fb.control('', Validators.required)
    });
   }

  ngOnInit() {
  }

  donate() {

    var post = JSON.stringify(this.myForm.value)
    console.log(post)


  }



}
