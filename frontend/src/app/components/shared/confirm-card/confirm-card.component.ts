import { Component, inject } from '@angular/core';
import { ConfirmCardService } from './confirm-card.service';
import { ButtonComponent } from '../button/button.component';
import { MessageService } from '../message/message.service';
import { helpers } from '../../../../helpers/helpers';

@Component({
  selector: 'app-confirm-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './confirm-card.component.html',
  styleUrls: ['./confirm-card.component.scss'],
})
export class ConfirmCardComponent {
  confirmCardService = inject(ConfirmCardService);
  messageService = inject(MessageService);

  async cancelOrConfirm(value: boolean): Promise<void> {
    if (value) {
      await this.confirmCardService
        .outFunction()
        .then(() => {
          this.confirmCardService.close();
          this.messageService.showMessage(
            helpers.messages.SUCCESS_ACTION,
            'success'
          );
        })
        .catch(() => {
          this.confirmCardService.close();
        });
    } else {
      this.confirmCardService.close();
    }
  }
}
