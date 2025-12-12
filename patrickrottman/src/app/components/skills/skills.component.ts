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
  skillCategories = [
    {
      category: 'AI/ML Engineering',
      skills: [
        { icon: 'extension', name: 'MCP Engineering' },
        { icon: 'hub', name: 'Agent Orchestration' },
        { icon: 'psychology', name: 'LLM Integration' },
        { icon: 'smart_toy', name: 'AI/ML' },
        { icon: 'architecture', name: 'Prompt Engineering' },
        { icon: 'category', name: 'RAG Systems' },
        { icon: 'auto_awesome', name: 'OpenAI API' },
        { icon: 'chat', name: 'Anthropic API' },
        { icon: 'dataset', name: 'Vector Databases' }
      ]
    },
    {
      category: 'Languages & Frameworks',
      skills: [
        { icon: 'code', name: 'C#' },
        { icon: 'code', name: 'TypeScript' },
        { icon: 'javascript', name: 'JavaScript' },
        { icon: 'html', name: 'HTML5' },
        { icon: 'web', name: 'Angular' },
        { icon: 'language', name: 'ASP.NET Core' },
        { icon: 'storage', name: 'Entity Framework' },
        { icon: 'sync_alt', name: 'SignalR' },
        { icon: 'code', name: 'Node.js' },
        { icon: 'stream', name: 'RxJS' },
        { icon: 'api', name: 'REST APIs' }
      ]
    },
    {
      category: 'Infrastructure & DevOps',
      skills: [
        { icon: 'cloud', name: 'AWS' },
        { icon: 'folder', name: 'S3' },
        { icon: 'widgets', name: 'ECS/EKS' },
        { icon: 'dns', name: 'RDS' },
        { icon: 'notifications', name: 'SNS/SQS' },
        { icon: 'flash_on', name: 'ElastiCache' },
        { icon: 'view_in_ar', name: 'Docker' },
        { icon: 'settings_suggest', name: 'Terraform' },
        { icon: 'play_circle', name: 'GitHub Actions' },
        { icon: 'terminal', name: 'PowerShell' },
        { icon: 'monitor_heart', name: 'CloudWatch' },
        { icon: 'analytics', name: 'Datadog' }
      ]
    },
    {
      category: 'Data & Messaging',
      skills: [
        { icon: 'storage', name: 'MSSQL' },
        { icon: 'storage', name: 'PostgreSQL' },
        { icon: 'storage', name: 'Redis' },
        { icon: 'swap_horiz', name: 'Kafka' }
      ]
    },
    {
      category: 'Security & Authentication',
      skills: [
        { icon: 'verified_user', name: 'OAuth/OIDC' },
        { icon: 'token', name: 'JWT' },
        { icon: 'account_circle', name: 'AWS Cognito' },
        { icon: 'shield', name: 'AWS IAM' }
      ]
    },
    {
      category: 'Testing & Quality',
      skills: [
        { icon: 'science', name: 'xUnit/NUnit' },
        { icon: 'bug_report', name: 'SonarQube' },
        { icon: 'http', name: 'Postman' }
      ]
    },
    {
      category: 'Tools & Collaboration',
      skills: [
        { icon: 'merge', name: 'Git' },
        { icon: 'code', name: 'GitHub' },
        { icon: 'dashboard', name: 'Jira' },
        { icon: 'description', name: 'Confluence' },
        { icon: 'code_blocks', name: 'VS Code' },
        { icon: 'brush', name: 'Figma' },
        { icon: 'memory', name: 'IoT' }
      ]
    }
  ];
} 