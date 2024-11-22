import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { icon: 'code', name: 'C#' },
    { icon: 'code', name: 'TypeScript' },
    { icon: 'javascript', name: 'JavaScript' },
    { icon: 'html', name: 'HTML5' },
    { icon: 'terminal', name: 'PowerShell' },
    { icon: 'code', name: 'GitHub' },
    { icon: 'web', name: 'Angular' },
    { icon: 'cloud', name: 'AWS' },
    { icon: 'view_in_ar', name: 'Docker' },
    { icon: 'settings_suggest', name: 'Terraform' },
    { icon: 'play_circle', name: 'GitHub Actions' },
    { icon: 'dashboard', name: 'Jira' },
    { icon: 'storage', name: 'MSSQL' },
    { icon: 'storage', name: 'PostgreSQL' },
    { icon: 'storage', name: 'Redis' },
    { icon: 'merge', name: 'Git' },
    { icon: 'memory', name: 'IoT' },
    { icon: 'brush', name: 'Figma' }
  ];
} 