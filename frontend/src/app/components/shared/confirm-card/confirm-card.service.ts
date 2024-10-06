import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmCardService {
  display: boolean = false;
  message!: string;
  outFunction!: () => Promise<void>;

  setVisible(message: string, outFunction: () => Promise<void>): void {
    this.display = !this.display;

    this.message = message;
    this.outFunction = outFunction;
  }

  close(): void {
    this.display = false;

    this.message = '';
    this.outFunction = async () => {};
  }
}
