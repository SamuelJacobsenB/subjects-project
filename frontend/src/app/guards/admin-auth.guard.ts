import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  authService = inject(AuthService);

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.authService.verify('admin');

    if (isAuthenticated) {
      return true;
    }

    return false;
  }
}
