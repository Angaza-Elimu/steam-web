import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AgeGroupComponent } from './age-group/age-group.component';
import { TopicsComponent } from './topics/topics.component';
import { NotesComponent } from './notes/notes.component';
import { ToastrModule } from 'ngx-toastr';
import { CourseComponent } from './course/course.component';
import { AuthServiceService } from './auth-service.service';
import { ApiService } from './api.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgeGroupComponent,
    TopicsComponent,
    NotesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthServiceService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
