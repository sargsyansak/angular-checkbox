import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ServiceCheckbox} from './service-checkbox/service-checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: ServiceCheckbox) {
  }


  deliveryTypes = ['MM', 'MP', 'PM', 'Internal/Return', 'Takeaway'];
  orderGroups = ['Group Order', 'Corporate Order', 'Multi-Partner'];
  modules = ['Call Center', 'Push Notification', 'Email Notification'];

  form = new FormControl();

  activeIsChek = {
    name: '',
    isActiv: false,
  };

  inData(name: string) {
    this.activeIsChek.name = name;
    this.activeIsChek.isActiv = this.form.value;
    this.service.dataCheck(this.activeIsChek);

  }
}
