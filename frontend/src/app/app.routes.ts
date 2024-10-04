import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TopicComponent } from './pages/topic/topic.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: ':subject',
    component: SubjectComponent,
  },
  {
    path: ':subject/:id',
    component: TopicComponent,
  },
];
