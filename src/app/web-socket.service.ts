import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private wsUrl = 'ws://matchmanagement.azurewebsites.net/websocket';

  constructor() { }

  getWebSocket(): WebSocket {
	return new WebSocket(this.wsUrl);
  }
}
