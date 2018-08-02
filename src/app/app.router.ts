import { Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SentItemsComponent } from './sent-items/sent-items.component';

export const routes: Routes = [
	
	{path: '', component: InboxComponent},
	{path: 'inbox', component: InboxComponent},
	{path: 'sent-items', component: SentItemsComponent},
	{path: '**', component: InboxComponent},
];


