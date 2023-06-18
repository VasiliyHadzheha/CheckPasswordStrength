import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-data-exchange',
  templateUrl: './parent-data-exchange.component.html',
  styleUrls: ['./parent-data-exchange.component.css']
})
export class ParentDataExchangeComponent {
  password: string = '';

  updatePassword(password: string): void {
    this.password = password
  }
}
