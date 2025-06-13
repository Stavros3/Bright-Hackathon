import { Component, OnInit } from '@angular/core';
import { AiChatService } from './service/ai-chat.service';
import { IonTextarea, IonButton, IonSpinner, ModalController, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from "../shared/header/header.component";
import { Input } from '@angular/core';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
  imports: [IonButtons, IonTitle, IonToolbar, IonHeader, IonContent, IonSpinner, IonTextarea, IonButton, CommonModule, ReactiveFormsModule, HeaderComponent],
  standalone: true
})
export class AiChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  form: FormGroup;
  loading = false;
  aiPrompt: string = 'Είμαι ο βοηθός AI του Bright. Πώς μπορώ να σε βοηθήσω;';

  constructor(
    private aiChatService: AiChatService,
    private fb: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.fb.group({
      userInput: ['']
    });
  }

  ngOnInit() {}

  async sendMessage() {
    const input = this.form.value.userInput?.trim();
    if (!input) return;
    const userMsg: ChatMessage = { role: 'user', content: input };
    this.messages.push(userMsg);
    this.form.reset();
    this.loading = true;
    try {
      const aiResponse = await this.aiChatService.sendMessage(input, this.messages, this.aiPrompt);
      this.messages.push({ role: 'ai', content: aiResponse } as ChatMessage);
    } catch (err) {
      this.messages.push({ role: 'ai', content: 'Σφάλμα AI.' } as ChatMessage);
    }
    this.loading = false;
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
