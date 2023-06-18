import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pass-strength-check';
  password: string = '';

  updatePassword(event: any) {
    this.password = event;
  }
}
