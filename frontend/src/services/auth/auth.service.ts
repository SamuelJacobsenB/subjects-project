import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api';
import { MessageService } from '../../app/components/shared/message/message.service';
import { UnauthorizedError } from '../../helpers/errors.helpers';
import { helpers } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  messageService = inject(MessageService);

  async verify(role: string): Promise<boolean> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        return await api
          .get(`/auth/${role}`, {
            headers: {
              Authorization: access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new UnauthorizedError(res.message);
            }

            return true;
          })
          .catch((err: any) => {
            throw new UnauthorizedError(err.message);
          });
      } catch (err: any) {
        this.router.navigateByUrl('/login');
        this.messageService.showMessage(err.message, 'error');
        return false;
      }
    } else {
      return false;
    }
  }
}
