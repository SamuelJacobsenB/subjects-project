import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss'],
})
export class AdminCardComponent {
  @Input({ required: true }) title: string = '';
  @Input() id?: string = '';
  @Input() editUrl!: () => void;
  @Input() deleteFunction!: () => void;

  async executeDelete(): Promise<void> {
    if (this.deleteFunction) {
      await this.deleteFunction();
    }
  }
}
