import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isAdmin:boolean = false;
  user:any = {};
  isloggedin:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user")!);
    if(this.user){
      this.isloggedin = true;
    }
    else{
      this.isloggedin= false;
    }
  }

  onClickLog(){
    window.location.reload()
  }

}
