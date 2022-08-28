import { Injectable } from '@angular/core';
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(): Message[] {
    return [
      {
        id: 1,
        content: 'This is a message'
      },
      {
        id: 2,
        content: 'This is another message'
      }
    ];
  }
}
