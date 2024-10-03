import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

type Type = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-form-area',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormareaComponent),
      multi: true,
    },
  ],
  templateUrl: './formarea.component.html',
  styleUrl: './formarea.component.scss',
})
export class FormareaComponent implements ControlValueAccessor {
  label = input.required<string>();
  type = input.required<Type>();
  name = input.required<string>();
  placeholder = input.required<string>();

  value: string = '';
  onChage: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChage(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChage = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
