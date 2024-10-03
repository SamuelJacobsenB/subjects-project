import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  display: boolean = false;

  toogleMenu(): void {
    this.display = !this.display;
  }

  setVisible(): void {
    this.display = true;
  }
}
