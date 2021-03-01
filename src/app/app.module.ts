import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { CodeComponent } from './code/code.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgeGroupComponent,
    TopicsComponent,
    NotesComponent,
    CourseComponent,
    ContentComponent,
    CodeComponent,
    ResourcesComponent,
    ProjectComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthServiceService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
