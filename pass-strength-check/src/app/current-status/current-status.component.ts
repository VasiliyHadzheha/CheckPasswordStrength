import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnChanges {
  @Input() password: string = '';
  firstBoxColor: string = '';
  secondBoxColor: string = '';
  thirdBoxColor: string = '';

  ngOnChanges(): void {
    this.colorUpdate();
  }

  colorUpdate(): void {
    const hasLetters = this.password.match(/[a-zA-Z]/);
    const hasDigits = this.password.match(/[0-9]/);
    const hasSymbols = this.password.match(/[^a-zA-Z0-9]/);

    if (this.password.length === 0) {
      this.firstBoxColor = 'gray';
      this.secondBoxColor = 'gray';
      this.thirdBoxColor = 'gray';
    } else if (this.password.length < 8) {
      this.firstBoxColor = 'red';
      this.secondBoxColor = 'red';
      this.thirdBoxColor = 'red';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.firstBoxColor = 'green';
      this.secondBoxColor = 'green';
      this.thirdBoxColor = 'green';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.firstBoxColor = 'yellow';
      this.secondBoxColor = 'yellow';
      this.thirdBoxColor = 'gray';
    } else {
      this.firstBoxColor = 'red';
      this.secondBoxColor = 'gray';
      this.thirdBoxColor = 'gray';
    }
  }
}
