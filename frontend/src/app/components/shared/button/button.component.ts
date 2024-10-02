import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

type Color = 'primary' | 'secondary';
type Type = 'submit' | 'reset' | 'button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  color = input.required<Color>();
  type = input.required<Type>();
}
