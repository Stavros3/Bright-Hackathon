import { Component, OnInit } from '@angular/core';
import { AiChatService } from './service/ai-chat.service';
import { IonTextarea, IonButton, IonSpinner, ModalController, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from "../shared/header/header.component";
import { Input } from '@angular/core';
import { blueStories } from '../shared/models/blue-story.model';
import { TrueFalseComponent } from './games/true-false/true-false.component';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

interface TrueFalseQuestion {
  question: string;
  answer: boolean;
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
  imports: [IonButtons, IonTitle, IonToolbar, IonHeader, IonContent, IonSpinner, IonTextarea, IonButton, CommonModule, ReactiveFormsModule, TrueFalseComponent],
  standalone: true
})
export class AiChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  form: FormGroup;
  loading = false;
  aiPrompt: string = 'Είμαι ο βοηθός AI του Bright. Πώς μπορώ να σε βοηθήσω;';

  mysteryGamesPrompt = 'You are a game host for the game "Παιχνίδια Μυστηρίου". The rules of the game are the Host must answer question of the player and responde only with "Ναι" or "Όχι". The porpuse it thata the player must solve what happened to the mystery. If player is too close to solve the mystery then host can finished the game and must tell the full story.  You provide hints and tips to players when they ask for help. Your responses should be in Greek and simple, targeting 8-12 years old children with ADHD and Dyslexia.The story you have to know its the: ' + blueStories.fullStory;

  isGameMode: boolean = false;
  showTrueFalseGame = false;
  trueFalseQuestions: TrueFalseQuestion[] = [];
  trueFalseLoading = false;

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

  setGameMode() {
    this.isGameMode = true;
    this.aiPrompt = this.mysteryGamesPrompt;
    this.messages = [];
    // Optionally, send a welcome message for the game mode
    this.messages.push({
      role: 'ai',
      content: 'Ξεκινάμε το παιχνίδι "Παιχνίδια Μυστηρίου"! Κάνε ερωτήσεις για να λύσεις το μυστήριο. Μπορώ να απαντήσω μόνο με "Ναι" ή "Όχι".<br /><br /><i>' + blueStories.startingHint + '</i><br /> Τι συνέβη;'
    });
  }

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

  async startTrueFalseGame() {
    this.showTrueFalseGame = true;
    this.trueFalseLoading = true;
    this.trueFalseQuestions = [];
    // Prompt for ChatGPT to generate 3 true/false questions about Hercules in Greek
    const prompt = `
Δημιούργησε 3 ερωτήσεις τύπου "Σωστό ή Λάθος" σχετικά με τον Ηρακλή, στα Ελληνικά, για παιδιά 8-12 ετών. Δώσε τις απαντήσεις ως true/false. Επιστροφή ως JSON array με αντικείμενα { "question": "...", "answer": true/false }.
`;
    try {
      const aiResponse = await this.aiChatService.sendMessage(
        prompt,
        [],
        'Είσαι βοηθός που δημιουργεί ερωτήσεις Σωστό/Λάθος για παιδιά.'
      );
      // Try to parse the JSON from the AI response
      const match = aiResponse.match(/\[.*\]/s);
      if (match) {
        this.trueFalseQuestions = JSON.parse(match[0]);
      }
    } catch (e) {
      this.trueFalseQuestions = [];
    }
    this.trueFalseLoading = false;
  }

  exitTrueFalseGame() {
    this.showTrueFalseGame = false;
    this.trueFalseQuestions = [];
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
