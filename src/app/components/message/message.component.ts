import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../models/message";

@Component({
  selector: 'message',
  templateUrl: './message.template.html',
  styleUrls: ['./message.scss']
})
export class MessageComponent implements OnInit {

  @Input() message?: Message;
  @Output() selectMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMessage() {
    this.selectMessage.emit(`Usted seleccionó el mensaje: ${this.message?.content}`);
  }
}
