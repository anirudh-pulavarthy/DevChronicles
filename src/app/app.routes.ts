import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ProjectsComponent } from './pages/projects/projects.component';
// import { ResumeComponent } from './pages/resume/resume.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),  
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-me/about-me.component').then((m) => m.AboutMeComponent),
  },
  { path: 'about-me', redirectTo: 'about', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  }
]

// export const routes: Routes = [
//   { path: '', component: HeroComponent },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'resume', component: ResumeComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', redirectTo: '' }
// ];

// Things that I learned:
// 
// This file defines the routing configuration for an Angular application. 
// It imports necessary modules and components, and sets up the routes to navigate between different components. 
// The main route is set to the HomeComponent, and usually any unmatched routes are redirected to the home page.
// The routes are defined in an array of objects, where each object specifies the path and the corresponding component to load. 
// The '**' wildcard is used to catch all unmatched routes and redirect them to the home page.