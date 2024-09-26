import { Routes } from '@angular/router';
import { PageNameComponent } from './page-name/page-name.component';

export const routes: Routes = [  // Add export here
  { path: '', component: PageNameComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
