import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { sample } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';

  currentFloor: string;
  currentSpace: string;

  floors = ['EG', '01', '02'];
  spaces = ['HR', 'Lobby', 'Workarea', 'Kitchen'];

  constructor(private socketService: SocketService) {}

  onClick() {
    this.socketService.sendMessage('');
  }

  ngOnInit() {
    this.socketService.getMessage();
    this.currentFloor = sample(this.floors);
    this.currentSpace = sample(this.spaces);
  }

  ac(event: boolean) {
    console.log(`AC is ${event}`);
  }

  fridge(event: boolean) {
    console.log(`fridge is ${event}`);
  }

  tv(event: boolean) {
    console.log(`tv is ${event}`);
  }

  light(event: boolean) {
    console.log(`light is ${event}`);
  }
}
