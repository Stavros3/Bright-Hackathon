import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiKey = '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'; // Replace with your actual API key
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  async sendMessage(message: string, history: any[], aiPrompt: string): Promise<string> {
    const messages = [
      { role: 'system', content: aiPrompt },
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'o4-mini-2025-04-16',
      messages: messages
    };

    const response: any = await firstValueFrom(
      this.http.post(this.apiUrl, body, { headers })
    );
    return response.choices[0].message.content.trim();
  }
}
