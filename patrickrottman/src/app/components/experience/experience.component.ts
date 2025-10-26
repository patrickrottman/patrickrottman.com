import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      year: '2025',
      title: 'Senior Software Engineer, Team Lead',
      company: 'DriveCentric',
      location: 'St. Louis, MO',
      period: 'April 2025 — Current',
      achievements: [
        'Leading the R&D team, building fast-paced features and driving value by integrating AI into our existing stack.',
        'Pushing the bounds of what is possible with LLMs and AI, exploring cutting-edge solutions for real-world business problems.',
        'Collaborating with stakeholders to ensure rapid delivery and innovation while maintaining product quality.'
      ]
    },
    {
      year: '2024',
      title: 'Senior Software Engineer',
      company: 'DriveCentric',
      location: 'St. Louis, MO',
      period: 'September 2024 — April 2025',
      achievements: [
        'Leading the company\'s AI initiative \'AIM,\' a cloud-based marketing department creating personalized messaging for unparalleled engagement.',
        'Delivered successful integration with Ford, surpassing deadlines and client expectations.',
        'Collaborating with stakeholders to ensure fast resolutions to customer needs.'
      ]
    },
    {
      year: '2023',
      title: 'Software Engineer III, Team Lead',
      company: 'DriveCentric',
      location: 'St. Louis, MO',
      period: 'August 2022 — September 2024',
      achievements: [
        'Led a team of engineers, contributing to full-stack development on enterprise projects.',
        'Balanced team leadership with 80% focus on hands-on coding.',
        'Drove initiatives to streamline delivery timelines and improve product quality.',
        'Supported technical decision-making through cross-functional collaboration.'
      ]
    },
    {
      year: '2022',
      title: 'Software Engineer III',
      company: 'DriveCentric',
      location: 'St. Louis, MO',
      period: 'May 2022 — August 2022',
      achievements: [
        'Delivered features for enterprise applications, contributing across the full stack.',
        'Exceeded project deadlines, leading to early promotion.'
      ]
    },
    {
      year: '2020',
      title: 'Software Engineering Senior Analyst',
      company: 'Cigna',
      location: 'St. Louis, MO',
      period: 'June 2020 — May 2022',
      achievements: [
        'Led Full Stack Development on an enterprise-grade application for the entire book of business, including the Department of Defense.',
        'Built a production application from the ground up as the only .NET developer, in record time.',
        'Collaborated directly with clients to identify and automate inefficiencies, with one automation saving a month\'s worth of time across employees.'
      ]
    },
    {
      year: '2017',
      title: 'Software Engineering Intern',
      company: 'Cigna',
      location: 'St. Louis, MO',
      period: 'May 2017 — June 2020',
      achievements: [
        'Worked with full responsibilities of a full-time developer, gaining accelerated exposure to real-world software development.'
      ]
    }
  ];
} 