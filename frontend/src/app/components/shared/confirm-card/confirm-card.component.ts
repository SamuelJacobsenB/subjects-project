import { Component, inject } from '@angular/core';
import { ConfirmCardService } from './confirm-card.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirm-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './confirm-card.component.html',
  styleUrls: ['./confirm-card.component.scss'],
})
export class ConfirmCardComponent {
  confirmCardService = inject(ConfirmCardService);

  async cancelOrConfirm(value: boolean): Promise<void> {
    if (value) {
      await this.confirmCardService.outFunction();
      this.confirmCardService.close();
    } else {
      this.confirmCardService.close();
    }
  }
}
