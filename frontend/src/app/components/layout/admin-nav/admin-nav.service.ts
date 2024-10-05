import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminNavService {
  display: boolean = false;
  isAdmin: boolean = false;

  toogleMenu(): void {
    this.display = !this.display;
  }

  setVisible(): void {
    this.display = true;
  }
}
