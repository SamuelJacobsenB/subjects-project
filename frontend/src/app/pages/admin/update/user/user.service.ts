import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  UnauthorizedError,
  BadRequestError,
} from '../../../../../helpers/errors.helpers';
import { api } from '../../../../../services/api';
import { helpers } from '../../../../../helpers/helpers';
import { User } from '../../../../../types/user.type';
import { MessageService } from '../../../../components/shared/message/message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  router = inject(Router);
  messageService = inject(MessageService);

  readonly id: string = this.router.url.split('/')[4];

  user = signal<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    role: '',
    created_at: new Date(),
    updated_at: new Date(),
  });

  async get(): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        return await api
          .get(`/user/${this.id}`, {
            headers: {
              Authorization: access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new BadRequestError(res.message);
            }

            this.user.set(res.data);
          })
          .catch((err: any) => {
            throw new UnauthorizedError(err.message);
          });
      } catch (err: any) {
        this.router.navigateByUrl('/login');
        this.messageService.showMessage(err.message, 'error');
      }
    }
  }
}
