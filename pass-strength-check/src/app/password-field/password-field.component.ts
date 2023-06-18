import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent {
  visiblePass: boolean = false;
  password: string = '';
  @Output() passwordChanged = new EventEmitter<string>();
  emitPassword(): void {
    this.passwordChanged.emit(this.password);
  }
}
