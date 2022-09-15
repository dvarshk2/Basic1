import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  isActive : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onBoxHandler(){
    // if(this.isActive === true){
    //   this.isActive = false;
    // }else{
    //   this.isActive = true;
    // }
    // (this.isActive === true) ? this.isActive = false : this.isActive = true;
    // (this.isActive) ? this.isActive = false : this.isActive = true;
    this.isActive = !this.isActive;
  }
}
