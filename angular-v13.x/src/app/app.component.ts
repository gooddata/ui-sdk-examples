import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  counter = 21;
  title = 'angular-v13.x';

  handleOnClick(stateCounter: number) {
    this.counter++;
  }
}
