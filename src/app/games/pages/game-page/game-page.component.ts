import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, retryWhen, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
  standalone: false
})
export class GamePageComponent {
  @ViewChild('chatModal') chatModal!: TemplateRef<any>;
  chatMessages: string[] = [];
  userMessage: string = '';
  isLoading: boolean = false;

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openChatModal() {
    this.dialog.open(this.chatModal, {
      width: '400px',
      height: '600px',
      position: { right: '20px', bottom: '90px' }
    });
  }

  closeChatModal() {
    this.dialog.closeAll();
  }

  sendMessage() {
    if (this.userMessage.trim() && !this.isLoading) {
      this.isLoading = true;
      this.chatMessages.push(`Tú: ${this.userMessage}`);
      this.callChatGPTAPI(this.userMessage);
      this.userMessage = '';
    }
  }

  callChatGPTAPI(message: string) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = environment.openaiApiKey;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    };

    this.http.post(apiUrl, body, { headers })
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            delay(1000), // Reintentar después de 1 segundo
            switchMap((error, index) => {
              if (index >= 5) {
                throw error; // Si hemos intentado 5 veces, lanza el error
              }
              return of(error);
            })
          )
        ),
        catchError((err: HttpErrorResponse) => {
          console.error('Error al llamar a la API:', err);
          if (err.status === 401) {
            this.chatMessages.push('PanaGamer: Error de autenticación. Verifica tu clave de API.');
          } else if (err.status === 429) {
            this.chatMessages.push('PanaGamer: Demasiadas solicitudes, intenta nuevamente más tarde.');
          } else {
            this.chatMessages.push('PanaGamer: Hubo un error al procesar tu solicitud. Intenta nuevamente.');
          }
          this.isLoading = false;
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response && response.choices && response.choices[0]) {
          const chatGPTResponse = response.choices[0].message.content;
          this.chatMessages.push(`ChatGPT: ${chatGPTResponse}`);
        }
        this.isLoading = false;
      });
  }
}
