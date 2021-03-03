import { Component } from '@angular/core';
import {Router}  from '@angular/router';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SteamWeb';


  // constructor(private router:Router){
  //   // this.router.navigate(['login']);
  // }

  currentUser: string;
  login_form: any;
  login_status: boolean = false;
  payment_prompt: boolean = false;
  user: string;
  user_type;
  time;
  page_id = 1;
  session_start: number;
  session_end: number;
  username;
  user_id;

  sign_in_overlay: boolean = false;
  menu_overlay: boolean = false;

  constructor(
    private data_service: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {

    this.router.navigate(['login']);
    // this.currentUser = localStorage.getItem("user_pk");
    // this.username = localStorage.getItem("angaza_user");
    // this.user_type = localStorage.getItem("user_type");
    // console.log(this.currentUser);
    // console.log(this.username);
    // this.currentUser && this.username
    //   ? this.goToNotes()
    //   : this.setFalseLoginStatus();
    // if (this.currentUser && this.username && this.user_type == "student") {
    //   this.learnButtonClicked();
    // } else if (
    //   this.currentUser &&
    //   this.username &&
    //   this.user_type == "teacher"
    // ) {
    //   this.goToTeacherDashboard();
    // } else if (
    //   this.currentUser &&
    //   this.username &&
    //   this.user_type == "admin"
    // ) {
    //   this.goToTeacherDashboard();
    // }else {
    //   this.setFalseLoginStatus();
    // }
    // this.router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd){
    //       gtag('config', 'G-LXP457QZJD', 
    //             {
    //               'page_path': event.urlAfterRedirects
    //             }
    //            );
    //    }
    // }
//  )

    // const username = new FormControl("", Validators.required);
    // const password = new FormControl("", Validators.required);


    // this.login_form = new FormGroup({
    //   username: username,
    //   password: password
    // });
  }

  goToNotes() {
    // this.spinner.show();
    this.login_status = true;
    console.log("clicked");
    this.router.navigate(["notes/math"]);
  }
  responsiveMenu(){
    if(this.menu_overlay == false){
      this.menu_overlay = true;
    } else {
      this.menu_overlay = false;
    }
  }
  goToAnalytics() {
    // this.spinner.show();
    this.menu_overlay = false;
    this.router.navigate(["analytics"]);
  }
  
  steamButtonClicked(){
    this.router.navigateByUrl('/steam');
  }
  learnButtonClicked(){
    this.menu_overlay = false;
    if(localStorage.getItem('learning_system') == 'primary'){
      this.goToNotes()
    } else {
      this.goToSecondary();
    }
    
  }

  revisionButtonClicked(){
    this.menu_overlay = false;
    
    if(localStorage.getItem('learning_system') == 'primary'){
      console.log('here');
      this.router.navigate(["primary_revision"]);
    } else {
      this.goToSecondary();
    }
    
  }

  goToSecondary(){
    this.router.navigateByUrl('secondary');
  }
  // navigateUser(user: string){
  //   switch(user){
  //     default: {
  //       this.toastr.error("An error occured. Kindly sign in again")
  //       break
  //     }
  //     case 'teacher': {
  //       this.menu_overlay = false;
  //       this.router.navigate(["/teacher_dash"]);
  //       break
  //     }
  //     case 'admin':{
  //       this.menu_overlay = false;
  //       this.router.navigate(["/teacher_dash"]);
  //       break;
        
  //     }

  //     case 'student': {
  //       if(localStorage.getItem('learning_system') == 'primary'){
  //         this.goToNotes();
  //       } else if(localStorage.getItem('learning_system') == 'secondary'){
  //         this.router.navigateByUrl('secondary');
  //       }else {
  //         this.router.navigateByUrl('home');
  //       }
  //      break;
  //     }
  //   }
  // }
  setFalseLoginStatus() {
    this.login_status = false;
    localStorage.removeItem("user_pk");
    localStorage.removeItem("angaza_user");
    localStorage.clear();
  }
  signInToggle(){
    if(this.sign_in_overlay == false){
      this.sign_in_overlay = true;
    }
  }
  
  exitModal(){
    this.sign_in_overlay = false;
  }
  loginAttempt() {
    // this.spinner.show();
    // console.log(this.login_form.value);
    // this.data_service.login(this.login_form.value).subscribe(response => {
    //     console.log(response);
    //     const { ...user } = response['user'];
    //     this.time = new Date();
    //     if(response && response["access_token"]){
    //       localStorage.setItem("user_pk", response["access_token"]);
    //       localStorage.setItem("user_type", user.user_type);
    //       localStorage.setItem("school_code", user.school_code);
    //       localStorage.setItem("user_id", user.id);
    //       localStorage.setItem("angaza_user",user.username)
    //       localStorage.setItem("class", user.class);
    //       localStorage.setItem('user', user.username);
    //       localStorage.setItem('login_time', this.time);
    //       localStorage.setItem('school_code', user.school_code);
    //       localStorage.setItem('learning_system', user.learning_system);
          
    //       this.user = user.username;
    //       this.user_type = user.user_type;
    //       if(response['subscription'].length == 0 && user.user_type == 'student'){
    //         this.toastr.info('You are currently not subsribed to any plan.')
    //         this.router.navigateByUrl('/pricing');
    //       } else{
    //         // this.navigateUser(this.user_type);
    //       }
          
    //       this.login_status = true;
    //       let token = localStorage.getItem('user_pk');

    //       if(token){
    //         this.sign_in_overlay = false;
    //         this.toastr.success("You are logged in")
    //         // alertify.alert("Login Successful","You have logged in Successfully.");
    //       }
    //     }
    //     console.log(response);
    //     // this.spinner.hide();

    //     // alertify.alert("Login Successful", "Login was successful.", function() {
    //     //   alertify.message("OK");
    //     // });
    //   },
    //   err => {
    //     this.toastr.error("Invalid Username or password")
    //     this.sign_in_overlay = false;
    //   }
    // );
  }
  // goToTeacherDashboard() {
  //   this.menu_overlay = false;
  //   this.router.navigate(["/teacher_dash"]);
  // }

  goToSignupPage(){
    this.router.navigateByUrl("/sign");
  }
  goToParentDashBoard() {
    this.menu_overlay = false;
    this.router.navigate(["/parent_dash"])
  }
  logout() {
      localStorage.removeItem("user_pk");
      localStorage.removeItem("angaza_user");
      localStorage.clear();
      this.username = "";
      this.login_status = false;
      this.user_type = null;
      this.menu_overlay = false;
      this.router.navigateByUrl("/");

  }
  signupPage() {
    this.router.navigateByUrl("/sign");

  }
  openProfilePage(){
    this.router.navigateByUrl("/profile");
  }
  goToAbout(){
    this.menu_overlay = false;
    this.router.navigateByUrl("/about");
  }
  goToHomePage(){
    this.menu_overlay = false;
    this.router.navigateByUrl("/home")
  }
  openPricingPage(){
    this.payment_prompt = false;
    this.router.navigateByUrl("/pricing");
  }
  exitPayment(){
    this.payment_prompt =false;
  }
  passwordResetPage(){
    this.sign_in_overlay = false;
    this.router.navigateByUrl("/passreset")
  }
}


