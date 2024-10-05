import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  translateSubject(title: string): string {
    switch (title) {
      case 'Matemática':
        return 'MATEMATICA';
      case 'Português':
        return 'PORTUGUES';
      case 'Ciências':
        return 'CIENCIAS';
      case 'História':
        return 'HISTORIA';
      case 'Geografia':
        return 'GEOGRAFIA';
      default:
        return title;
    }
  }
}
