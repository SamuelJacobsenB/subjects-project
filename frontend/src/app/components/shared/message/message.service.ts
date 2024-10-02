import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  type = signal<string>('');
  message = signal<string>('');
  display = signal<string>('none');

  showMessage(message: string, type: string) {
    this.message.set(message);
    this.type.set(type);
    this.display.set('block');

    setTimeout(() => {
      this.hideMessage();
    }, 4000);
  }

  hideMessage() {
    this.message.set('');
    this.type.set('');
    this.display.set('none');
  }
}
