import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../components/shared/message/message.service';
import {
  UnauthorizedError,
  BadRequestError,
} from '../../../helpers/errors.helpers';
import { helpers } from '../../../helpers/helpers';
import { api } from '../../../services/api';
import { Subtopic } from '../../../types/subtopic.type';

@Injectable({
  providedIn: 'root',
})
export class SubtopicService {
  router = inject(Router);
  messageService = inject(MessageService);

  subtopic = signal<Subtopic>({
    id: '',
    title: '',
    content: '',
    topicId: '',
    created_at: new Date(),
    updated_at: new Date(),
  });

  async getSubtopic(id: string): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (!access_token) {
          throw new UnauthorizedError(helpers.messages.UNAUTHORIZED);
        }

        await api
          .get(`/subtopic/${id}`, {
            headers: {
              Authorization: access_token,
            },
          })
          .then((res: any) => {
            if (res.message) {
              throw new BadRequestError(res.message);
            }

            this.subtopic.set(res.data);
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
