import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message";

@Component({
  selector: 'post',
  templateUrl: './post.template.html',
  styleUrls: ['./post.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  messages: Message[] = this.messageService.getMessages();

  response: string = '';

  constructor(private messageService: MessageService) {
    this.post = {
      title: 'My first post',
      content: 'This is my first post'
    }
  }

  ngOnInit(): void {
  }

  viewSelection(response: string) {
    this.response = response;
  }
}
