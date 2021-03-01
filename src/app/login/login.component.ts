import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login_form: any;
  loading: boolean = false;
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
