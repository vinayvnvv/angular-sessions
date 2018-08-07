import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sent-items',
  templateUrl: './sent-items.component.html',
  styleUrls: ['./sent-items.component.css']
})
export class SentItemsComponent implements OnInit {

  constructor(
  		private router: Router
  	) { }

  ngOnInit() {
  }


  navigateToInbox() {
  	this.router.navigate(['/inbox'])
  }

}
