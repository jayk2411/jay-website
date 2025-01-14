import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 90 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: '.NET Core', level: 80 },
        { name: 'C#', level: 85 },
        { name: 'Express.js', level: 90 }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 }
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Azure', icon: 'devicon-azure-plain colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'Jira', icon: 'devicon-jira-plain colored' }
  ];
}
