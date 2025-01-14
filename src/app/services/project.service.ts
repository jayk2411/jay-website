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
  highlights?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'ProLance IT Solutions',
      description: 'A comprehensive IT solutions platform built with Angular 14 and .NET technologies. Features include dynamic service listings, project portfolio showcase, and an integrated contact management system. The platform demonstrates modern web development practices with responsive design and optimized performance.',
      imageUrl: 'assets/project/prolance.png',
      technologies: [
        'Angular',
        'C#.NET',
        'SQL Server',
        'IIS Server',
        'Responsive Design',
        'SEO Optimization'
      ],
      liveUrl: 'https://prolanceit.in/',
      categories: ['web', 'fullstack', 'enterprise'],
      featured: true,
      highlights: [
        'Custom CMS for service management',
        'Responsive design for all devices',
        'SEO-optimized content structure',
        'Integrated contact form with backend validation',
        'Performance-optimized image loading',
        'Secure hosting with SSL certification'
      ]
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description: 'Modern portfolio website built with Angular 17 featuring a sleek design, smooth animations, and responsive layout. Showcases projects, skills, and professional experience with an interactive user interface.',
      imageUrl: 'assets/project/portfolio.png',
      technologies: [
        'Angular 17',
        'SCSS',
        'TypeScript',
        'Netlify',
        'GitHub Actions',
        'Responsive Design'
      ],
      liveUrl: 'https://jaykakdiya.netlify.app/',
      githubUrl: 'https://github.com/jayk2411/jay-website',
      categories: ['web', 'frontend'],
      featured: true,
      highlights: [
        'Modern glass-morphism design',
        'Smooth scroll animations',
        'Dynamic project filtering',
        'Interactive skill showcase',
        'Responsive layout for all devices',
        'Automated deployment with GitHub Actions',
        'Performance optimized assets',
        'SEO friendly structure'
      ]
    },
    {
      id: 3,
      title: 'T2D2 - AI-Powered Asset Inspection',
      description: 'An innovative AI-powered inspection platform that revolutionizes building asset management. Built with cutting-edge technologies, the platform features automated damage detection, cloud-based inspection management, and comprehensive analysis tools.',
      imageUrl: 'assets/project/T2D2.png',
      technologies: [
        'Angular',
        'Node.js',
        'Python',
        'TensorFlow',
        'AWS',
        'Computer Vision',
        'Machine Learning'
      ],
      liveUrl: 'https://t2d2.ai/',
      categories: ['web', 'fullstack', 'enterprise', 'ai'],
      featured: true,
      highlights: [
        'AI-powered damage detection system',
        'Cloud-based inspection management portal',
        'Drone inspection imagery integration',
        'Real-time analysis and monitoring',
        'Advanced computer vision algorithms',
        'Multi-platform support (mobile, web, drone)',
        'Automated reporting and analytics',
        'Integration with CAD/BIM systems',
        '360° photo visualization',
        'Thermal imaging analysis'
      ]
    },
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