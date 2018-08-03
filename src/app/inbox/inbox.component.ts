import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  providers:[CommonService]
})
export class InboxComponent implements OnInit {

  constructor(
  					private common: CommonService
  		) { }

  ngOnInit() {
  	console.log(this.common.replaceAdd("Hello vinay"))
  }

}
