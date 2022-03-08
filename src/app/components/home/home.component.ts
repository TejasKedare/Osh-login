import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  data: any = {};
  userData: any;
  routeState: any;
  constructor(private router: Router) {
    // if (this.router.getCurrentNavigation()?.extras.state) {
    //   this.routeState = this.router.getCurrentNavigation()?.extras.state;
    //   if (this.routeState) {
    //     this.data.data = this.routeState.data ? JSON.parse(this.routeState.data) : '';
    //   }
    // }
  }
  
  
  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    this.data = localStorage.getItem('data')
    this.userData = JSON.parse(this.data);
      console.log(JSON.parse(this.data) );   
  }

}
