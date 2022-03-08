import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import {FormControl} from '@angular/forms'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  userValue: any;
 
  constructor(
    private userService: UserService,private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      rememberMe: new FormControl()
    })
  }


  onSubmit(){
 
    this.userValue = this.userForm.value
    this.userService.login(this.userValue).subscribe((res: any) => {
    
      if (res.status == 201 && res.success == true) {
        alert('Invalid Password')
      } 
      if (res.status == 200 && res.success == true) {
        const userData = res.data;
        localStorage.setItem('data', JSON.stringify(userData));
  
        // this.router.navigate(['/home'], {
        //   state: {
        //     data: JSON.stringify({ userData }),
        //   }
        // });

        this.router.navigate(['/home']);
      }
      
    })
    
  }
}
