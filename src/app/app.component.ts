import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	contacts: Contacts[] = [];

	form: Contacts = {
		name: "",
		phone: "",
		address: ""
	}

	constructor() {
		this.initContacts();
	}

	initContacts() {
		this.contacts.push({name: 'vinay', phone: "224324434", address: 'Banlr'})
	}

	addContact = () => {
		console.log(this.form);
		this.contacts.push(this.form)
	}

	deleteContact(index) {
		console.log('deleting index', index)
		this.contacts.splice(index, 1);
	}
  


}

class Contacts {
	name: string;
	phone: string;
	address: string;
}
