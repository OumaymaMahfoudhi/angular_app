import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  [x: string]: any;

  user:User = new User();

  constructor(private loginuserservice: LoginuserService ,
  private router: Router) { }


  ngOnInit(): void {
    
  }

  userLogin(){
    
    this.loginuserservice.LoginUser(this.user).subscribe( data=>{
      console.log(this.user)
      this.router.navigate(['/publication-list']);
      
    }, error => alert("Mot de passe incorrect"));
  }
  
    




    

    
  }     
  
