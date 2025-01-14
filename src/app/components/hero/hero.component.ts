import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.animate-up', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  name = 'Jaykumar Kakadiya';
  title = 'Full Stack Developer';
  description = 'Experienced developer specializing in MEAN Stack, MERN Stack, and .NET technologies. Passionate about building scalable web applications with modern technologies and SQL databases.';
  
  techStack = [
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: '.NET', icon: 'devicon-dot-net-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' }
  ];

  codeSnippets = [
    `const developer = {
      name: 'Jaykumar',
      skills: ['Angular', 'React', 'Node.js'],
      passion: 'Building amazing web apps'
    }`,
    `function createAwesomeStuff() {
      return innovation + creativity;
    }`,
    `// TODO: Make the web better
    while(true) {
      code();
      learn();
      improve();
    }`
  ];

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    // Remove the document.documentElement.style.setProperty code
  }

  scrollToProjects() {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
