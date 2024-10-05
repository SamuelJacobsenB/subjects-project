import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  UnauthorizedError,
  BadRequestError,
} from '../../../../../helpers/errors.helpers';
import { MessageService } from '../../../../components/shared/message/message.service';
import { api } from '../../../../../services/api';
import { helpers } from '../../../../../helpers/helpers';
import { User } from '../../../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  router = inject(Router);
  messageService = inject(MessageService);

  users = signal<User[]>([]);

  async getUsers(): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        await api
          .get(`/user`, {
            headers: {
              Authorization: access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new BadRequestError(res.message);
            }

            this.users.set(res.data);
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

  async deleteUser(id: string): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        await api
          .delete(`/user/${id}`, {
            headers: {
              Authorization: access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new BadRequestError(res.message);
            }

            this.messageService.showMessage(
              helpers.messages.SUCCESS_ACTION,
              'success'
            );
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
