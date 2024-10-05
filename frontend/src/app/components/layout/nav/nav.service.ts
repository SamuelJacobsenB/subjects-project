import { Injectable } from '@angular/core';
import { api } from '../../../../services/api';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  display: boolean = false;
  isAdmin: boolean = false;

  toogleMenu(): void {
    this.display = !this.display;
  }

  setVisible(): void {
    this.display = true;
  }

  async verifyAdmin(): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      try {
        const access_token: string | null =
          localStorage.getItem('access_token');

        if (access_token) {
          await api
            .get(`/auth/admin`, {
              headers: {
                Authorization: access_token,
              },
            })
            .then((res: any) => {
              if (!res.message) {
                this.isAdmin = true;
              }
            });
        }
      } catch {}
    }
  }
}
