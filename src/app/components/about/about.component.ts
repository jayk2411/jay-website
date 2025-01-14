import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experience = 'Over 3 years';
  technologies = [
    'MEAN Stack (MongoDB, Express.js, Angular, Node.js)',
    'MERN Stack (MongoDB, Express.js, React, Node.js)',
    '.NET Framework & .NET Core',
    'SQL Server & Database Design'
  ];
  
  highlights = [
    'Full Stack Development',
    'RESTful API Design',
    'Database Architecture',
    'Cloud Deployment',
    'Agile Methodologies'
  ];
}
