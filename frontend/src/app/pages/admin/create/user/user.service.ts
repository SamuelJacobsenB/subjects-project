import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../../components/shared/message/message.service';
import {
  UnauthorizedError,
  BadRequestError,
} from '../../../../../helpers/errors.helpers';
import { helpers } from '../../../../../helpers/helpers';
import { api } from '../../../../../services/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  router = inject(Router);
  messageService = inject(MessageService);

  async create(name: string, email: string, password: string): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        await api
          .post(
            `/user`,
            { name, email, password },
            {
              headers: {
                Authorization: access_token,
              },
            }
          )
          .then((res: any) => {
            if (res.message) {
              this.messageService.showMessage(res.message, 'error');
            }

            console.log(res);

            this.messageService.showMessage(
              helpers.messages.SUCCESS_ACTION,
              'success'
            );

            this.router.navigateByUrl('/admin/modify/users');
          })
          .catch((err: any) => {
            this.messageService.showMessage(
              err.response.data.message[0],
              'error'
            );
          });
      } catch (err: any) {
        this.router.navigateByUrl('/login');
        this.messageService.showMessage(err.message, 'error');
      }
    }
  }
}
