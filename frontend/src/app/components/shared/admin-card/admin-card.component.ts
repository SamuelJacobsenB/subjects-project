import { Component, Input, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmCardService } from '../confirm-card/confirm-card.service';

@Component({
  selector: 'app-admin-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss'],
})
export class AdminCardComponent {
  router = inject(Router);
  corfirmCardService = inject(ConfirmCardService);

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) deleteFunction?: (id: string) => void;

  async executeDelete(): Promise<void> {
    if (this.deleteFunction) {
      this.corfirmCardService.setVisible(
        'Você deseja confirmar a exclusão deste elemento?',
        async () => this.deleteFunction!(this.id)
      );
    }
  }

  edit(): void {
    this.router.navigateByUrl(`/admin/modify/users/${this.id}`);
  }

  faPecil = faPencil;
  faTrash = faTrash;
}
