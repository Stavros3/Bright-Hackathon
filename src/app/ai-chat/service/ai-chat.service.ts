import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiKey = environment.openai.apiKey; // Ensure you have the correct API key in your environment file
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
