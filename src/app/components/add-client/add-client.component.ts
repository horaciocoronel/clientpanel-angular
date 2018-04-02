import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
// Import Client model
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
	// Define an empty Client object
	client: Client = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		balance: 0
	}
	// We can't add a balance when we add a new client
	disableBalanceOnAdd: boolean = true;

	@ViewChild('clientForm') form :any;

  constructor(
		private flashMessage: FlashMessagesService,
		private clientService: ClientService,
		private router: Router
	) { }

  ngOnInit() {
  }
	onSubmit({value, valid}: {value: Client, valid: boolean}) {
		if(this.disableBalanceOnAdd) {
			value.balance = 0;
		}
		if(!valid) {
			// Show error
			this.flashMessage.show('Please fill out the form correctly', { cssClass: 'alert-danger', timeout: 3000
		});
		} else {
		// Add new Client
		this.clientService.newClient(value);
		// Show message
		this.flashMessage.show('New Client Added', { cssClass: 'alert-success', timeout: 3000
		});
		// Redirect to Dashboard
		this.router.navigate(['/']);
	}
	}

}
