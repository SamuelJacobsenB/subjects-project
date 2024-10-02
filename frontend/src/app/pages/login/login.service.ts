import { inject, Injectable } from '@angular/core';
import { api } from '../../../services/api';
import { MessageService } from '../../components/shared/message/message.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  messageService = inject(MessageService);

  async login(email: string, password: string) {
    this.messageService.showMessage('Mensagem de login', 'error');

    await api
      .post('/auth/login', { email: email, password: password })
      .then((res: any) => {
        if (res.data.access_token) {
          localStorage.setItem('access_token', res.data.access_token);
        } else {
          throw new Error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
