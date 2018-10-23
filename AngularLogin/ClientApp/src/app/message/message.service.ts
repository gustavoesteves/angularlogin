import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  active: string = "";

  constructor() { }

  add(message: Object) {
    Object.values(message).map(values => {
      this.active = "box messages";
      this.messages.push(values);
    });
  }

  clear() {
    this.messages = [];
    this.active = "";
  }
}
