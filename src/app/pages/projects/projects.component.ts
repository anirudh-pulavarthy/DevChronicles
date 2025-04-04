import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from './project-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  allProjects: Project[] = PROJECTS;
  selectedTag: string | null = null;

  get uniqueTags(): string[] {
    const allTags = this.allProjects.flatMap(p => p.tags ?? []);
    return [...new Set(allTags)];
  }

  get filteredProjects(): Project[] {
    if (!this.selectedTag) return this.allProjects;
    return this.allProjects.filter(p => 
      this.selectedTag && p.tags?.includes(this.selectedTag)
    );
  }

  selectTag(tag: string | null) {
    this.selectedTag = tag;
  }
}
