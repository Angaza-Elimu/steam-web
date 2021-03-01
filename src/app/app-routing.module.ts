import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './course/course.component';
import { AgeGroupComponent } from './age-group/age-group.component';
import { NotesComponent } from './notes/notes.component';
import { ContentComponent } from './content/content.component';
import { CodeComponent } from './code/code.component';
import { ProjectComponent } from './project/project.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
   
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'age-group',
        children: [
          {
            path: ':course',
            component: AgeGroupComponent
          },
          {
            path: ':course/content',
            component: ContentComponent,
            children: [
              {
                path: 'notes',
                component: NotesComponent
              },
              {
                path: 'code',
                component: CodeComponent
              },
              {
                path: 'project',
                component: ProjectComponent
              },
              {
                path: 'resources',
                component: ResourcesComponent
              }
            ]
          }
        ]
      },
      
    
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
