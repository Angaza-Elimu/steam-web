import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user;
  login_form: any;
  loading: boolean = false;
  user_type;
  constructor(private toastr: ToastrService, private apiService: ApiService, private router: Router) {
    const username = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);

    this.login_form = new FormGroup(
      {
        username: username,
        password: password
      }
    );
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.apiService.login(this.login_form.value).subscribe(response => {
      this.loading = false;
      console.log(response);
      if (response['access_token']) {
        const { ...user } = response['user'];

        if (response && response["access_token"]) {
          localStorage.setItem("user_pk", response["access_token"]);
          localStorage.setItem("user_type", user.user_type);
          localStorage.setItem("school_code", user.school_code);
          localStorage.setItem("user_id", user.id);
          localStorage.setItem("angaza_user", user.username)
          localStorage.setItem("class", user.class);
          localStorage.setItem('user', user.username);
          localStorage.setItem('school_code', user.school_code);
          localStorage.setItem('learning_system', user.learning_system);

          this.user = user.username;
          this.user_type = user.user_type;    
        }
        localStorage.setItem('user_pk', response["access_token"])
        this.router.navigate(['course']);
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.toastr.error("Error logging in", "Check your credentials")
    })
  }
}
