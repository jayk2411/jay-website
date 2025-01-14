import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  categories: string[];
  featured: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform built with MEAN stack featuring real-time inventory, payment integration, and admin dashboard.',
      imageUrl: 'assets/images/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      categories: ['web', 'fullstack'],
      featured: true
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Enterprise task management system built with .NET Core and SQL Server with real-time updates and team collaboration features.',
      imageUrl: 'assets/images/projects/task-manager.jpg',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'SignalR', 'Azure'],
      liveUrl: 'https://example.com/task-manager',
      githubUrl: 'https://github.com/yourusername/task-manager',
      categories: ['web', 'enterprise'],
      featured: true
    },
    // Add more projects as needed
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    return of(this.projects.filter(project => 
      category === 'all' ? true : project.categories.includes(category)
    ));
  }
} 