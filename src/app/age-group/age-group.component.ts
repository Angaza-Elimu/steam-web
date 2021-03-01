import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit {
  course_name: string = '';
  active_content: any;
  creative = {
    class_list: [
      {
        class_name: 'Leonardo',
        topics: [
          {
            topic_name: 'Games Programming'
          },
          {
            topic_name: 'Animations Programming'
          },
          {
            topic_name: 'Computer Aided Design'
          },
          {
            topic_name: 'Internet Safety'
          }
        ]
      },
      {
        class_name: 'Archimedes',
        topics: [
          {
            topic_name: 'Web Development'
          },
          {
            topic_name: 'Mobile App Development'
          },
          {
            topic_name: 'Advanced Coding'
          },
          {
            topic_name: 'Computer Aided Design'
          },
          {
            topic_name: 'Internet Safety'
          }
        ]
      }
    ],
    leonardo_topics: [
      {
        topic_name: 'Games Programming'
      },
      {
        topic_name: 'Animations Programming'
      },
      {
        topic_name: 'Computer Aided Design'
      },
      {
        topic_name: 'Internet Safety'
      }
    ],
    archimedes_topics: [
      {
        topic_name: 'Web Development'
      },
      {
        topic_name: 'Mobile App Development'
      },
      {
        topic_name: 'Advanced Coding'
      },
      {
        topic_name: 'Computer Aided Design'
      },
      {
        topic_name: 'Internet Safety'
      }
    ]
  }


  physical = {
    class_physical_list: [
      {
        class_name: 'Leonardo',
        topics: [
          {
            topic_name: 'Basic Electronics'
          },
          {
            topic_name: 'Block Programming'
          },
          {
            topic_name: 'Robotics'
          },

        ]
      },
      {
        class_name: 'Archimedes',
        topics: [
          {
            topic_name: 'Advanced Electronics'
          },
          {
            topic_name: 'Text Programming'
          },
          {
            topic_name: 'Robotics and Automation'
          },
          {
            topic_name: 'Internet of Things'
          },
          {
            topic_name: 'Electronic Circuit Design'
          },
          {
            topic_name: 'Embedded Systems'
          }
        ]
      }
    ],

    archimedes_topics: [
      {
        topic_name: 'Advanced Electronics'
      },
      {
        topic_name: 'Text Programming'
      },
      {
        topic_name: 'Robotics and Automation'
      },
      {
        topic_name: 'Internet of Things'
      },
      {
        topic_name: 'Electronic Circuit Design'
      },
      {
        topic_name: 'Embedded Systems'
      }
    ],
    leonardo_topics: [
      {
        topic_name: 'Basic Electronics'
      },
      {
        topic_name: 'Block Programming'
      },
      {
        topic_name: 'Robotics'
      },

    ]
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    let course_name = this.activeRoute.snapshot.paramMap.get("course");
    if (course_name == 'physical-computing') {
      this.active_content = this.physical;
      this.course_name = "Physical Computing";
    } else if (course_name == 'creative-computing') {
      this.course_name = "Creative Computing";
      this.active_content = this.creative;
    }
  }

  ngOnInit(): void {
  }

  tabClick(event) {

  }

  loadTopics() {

  }


  goToNotes() {
    this.router.navigate(['./age-group/' + this.activeRoute.snapshot.paramMap.get("course") + '/content']);
  }
}
