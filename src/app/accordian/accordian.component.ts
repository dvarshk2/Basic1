import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  framework : string = "vue";
  constructor() { }

  ngOnInit(): void {
  }
  skill :string ='javascript';
  name : string = 'hari';
}
