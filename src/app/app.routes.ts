import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

// Things that I learned:
// 
// This file defines the routing configuration for an Angular application. 
// It imports necessary modules and components, and sets up the routes to navigate between different components. 
// The main route is set to the HomeComponent, and usually any unmatched routes are redirected to the home page.
// The routes are defined in an array of objects, where each object specifies the path and the corresponding component to load. 
// The '**' wildcard is used to catch all unmatched routes and redirect them to the home page.