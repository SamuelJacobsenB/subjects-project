import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../components/shared/message/message.service';
import { api } from '../../../services/api';
import {
  BadRequestError,
  UnauthorizedError,
} from '../../../helpers/errors.helpers';
import { helpers } from '../../../helpers/helpers';
import { Topic } from '../../../types/topic.type';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  router = inject(Router);
  messageService = inject(MessageService);

  topics = signal<Topic[]>([]);

  async getTopics(subject: string): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        await api
          .get(`/topic/subject/${subject}`, {
            headers: {
              Authorization: 'Bearer ' + access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new BadRequestError(res.message);
            }

            this.topics.set(res.data);
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
