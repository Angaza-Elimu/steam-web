import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  login_form: any;
  loading: boolean = false;
  constructor(private toastr: ToastrService, private apiService: ApiService, private router: Router) {
    const username = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const first_name = new FormControl('', Validators.required);
    const last_name = new FormControl('', Validators.required);
    const phone = new FormControl('', Validators.required);

    this.login_form = new FormGroup(
      {
        username: username,
        first_name: first_name,
        last_name: last_name,
        password: password,
        phone: phone
      }
    );
   }

  ngOnInit(): void {
  }

  signup() {
    this.loading = true;
    this.apiService.register(this.login_form.value).subscribe(response => {
      this.loading = false;
      console.log(response);
      if(response['access_token']){
        localStorage.setItem('ang_auth_token', response["access_token"])
        this.router.navigate(['course']);
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.toastr.error("Error logging in", "Check your credentials")
    })
  }
}
