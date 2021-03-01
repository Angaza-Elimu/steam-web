import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToTopics(course_id){
    if(course_id == 1){
      this.router.navigate(['age-group/physical-computing']);
    }
    else if(course_id == 2){

      this.router.navigate(['age-group/creative-computing']);
    }
  }

}
