import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './environment';
import { ToastrService } from 'ngx-toastr';
import { ObservableInput } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  api_url: string;


  constructor(private http: HttpClient, private toastr: ToastrService) {
    environment.production == false ? this.api_url == environment.DEV_URL : this.api_url == environment.PROD_URL;

  }


  login(username, password) {
    let data = {
      username: username,
      password: password
    }

    
    return this.http.post(this.api_url + 'api/auth/login', data)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }

  register() {

  }

  getSubtopics() {

  }


  handleError(error): ObservableInput<any>{
    let errorMessage = '';
    
    errorMessage = error.error instanceof ErrorEvent ? `Error: ${error.error.message}` : `Error Code: ${error.status}\nMessage: ${error.message}`;
    this.toastr.show(errorMessage);
    return;
  }
}
