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


  api_url: string = environment.PROD_URL;


  constructor(private http: HttpClient, private toastr: ToastrService) {
  }


  login(formData) {
    let data = {
      username: formData.username,
      password: formData.password
    }
    console.log(data);

    return this.http.post(this.api_url + '/api/auth/login', data);
  }
  
  // register(form_data) {
  // }

  getSteamTopics() {
    return this.http.get(this.api_url + "/api/steamTopics");
  }

  getTopics(course_id: number, level_id: number) {
    let data = {
      course_id: course_id,
      level_id: level_id
    };
    return this.http.post(this.api_url + '/api/steamTopics', data).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  getSubtopics(subtopic_id) {
    let data = {
      subtopic_id: subtopic_id
    }
    return this.http.post(this.api_url + '/api/steamSubtopics', data)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }

  getNotes(){
    
  }


  handleError(error): ObservableInput<any> {
    let errorMessage = '';

    errorMessage = error.error instanceof ErrorEvent ? `Error: ${error.error.message}` : `Error Code: ${error.status}\nMessage: ${error.message}`;
    this.toastr.show(errorMessage);
    return;
  }
}
