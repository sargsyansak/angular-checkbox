import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new FormControl();
  deliveryTypes = ['MM', 'MP', 'PM', 'Internal/Return', 'Takeaway'];
  orderGroups = ['Group Order', 'Corporate Order', 'Multi-Partner'];
  modules = ['Call Center', 'Push Notification', 'Email Notification'];

}
