import { inject, Injectable } from '@angular/core';
import { api } from '../../../services/api';
import { MessageService } from '../../components/shared/message/message.service';
import { UnauthorizedError } from '../../../helpers/errors.helpers';
import { helpers } from '../../../helpers/helpers';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  router = inject(Router);
  messageService = inject(MessageService);

  async login(email: string, password: string) {
    await api
      .post('/auth/login', { email: email, password: password })
      .then((res: any) => {
        if (res.data.access_token) {
          localStorage.setItem(
            'access_token',
            'Bearer ' + res.data.access_token
          );
          this.router.navigateByUrl('/');
        } else {
          throw new UnauthorizedError(res.data.message);
        }
      })
      .catch(() => {
        this.messageService.showMessage(helpers.messages.BAD_REQUEST, 'error');
      });
  }
}
