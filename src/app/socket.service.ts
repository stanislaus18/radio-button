import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('ENERGY', msg);
  }

  close() {
    this.socket.disconnect();
  }

  getMessage() {
    return this.socket.fromEvent('ENERGY').subscribe((e) => console.log(e));
  }

  public userPing(userName): void {
    this.sendMessage(userName);
  }
}
