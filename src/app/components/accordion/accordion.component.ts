import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';
import {
  SafetyCertificateOutline,
  BugOutline,
  CodeOutline
} from '@ant-design/icons-angular/icons';

import { Panel } from '../../models/panel';

const icons: IconDefinition[] = [SafetyCertificateOutline, BugOutline, CodeOutline];

@Component({
  selector: 'collapse-accordion',
  standalone: true,
  imports: [NzCollapseModule, CommonModule, NzIconModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class AccordionComponent implements OnInit {
  panel1: string[] = [
    'Conocimiento de estándares y marcos de ciberseguridad (ISO/IEC 27001, ISO/IEC 27005 y CIS Controls).',
    'Fundamentos sólidos de redes (networking): direccionamiento, subredes, switching/routing y troubleshooting básico',
    'Administración de sistemas Linux.'
  ];

  panel2: string[] = [
    'Reconocimiento y análisis básico de vulnerabilidades en aplicaciones web, sistemas y redes.',
    'Uso de herramientas de Red Team: Nmap, Metasploit, Burp Suite, Wireshark.',
    'Aplicación de buenas prácticas de seguridad basadas en OWASP Top 10.',
    'Apoyo en revisiones técnicas, documentación de hallazgos y recomendaciones de mitigación.'
  ];

  panels: Panel[] = [
    {
      active: false,
      name: 'Ciberseguridad',
      icon: 'safety-certificate',
      items: this.panel1,
      childPanel: [{ active: false, name: 'This is panel header 1-1' }]
    },
    {
      active: false,
      name: 'Ethical Hacking',
      icon: 'linux',
      items: this.panel2
    },
    {
      active: false,
      name: 'Desarrollo web y DevOps',
      icon: 'code',
      techGroups: [
        {
          title: 'Frontend',
          items: [
            { name: 'HTML5', logo: 'images/tech/html5.png' },
            { name: 'CSS3', logo: 'images/tech/css3.png' },
            { name: 'JavaScript', logo: 'images/tech/javascript.png' },
            { name: 'Angular', logo: 'images/tech/angular.png' },
            { name: 'React', logo: 'images/tech/react.png' }
          ]
        },
        {
          title: 'Backend',
          items: [
            { name: 'Java', logo: 'images/tech/java.png' },
            { name: 'Spring Boot', logo: 'images/tech/spring-boot.png' },
            { name: 'Node.js', logo: 'images/tech/nodejs.png' },
          ]
        },
        {
          title: 'Bases de datos',
          items: [
            { name: 'MySQL', logo: 'images/tech/mysql.png' },
            { name: 'PostgreSQL', logo: 'images/tech/postgresql.png' },
            { name: 'SQL Server', logo: 'images/tech/sqlserver.png' }          ]
        },
        {
          title: 'Herramientas DevOps',
          items: [
            { name: 'AWS', logo: 'images/tech/aws.png' },
            { name: 'Azure', logo: 'images/tech/azure.png' },
            { name: 'Docker', logo: 'images/tech/docker.png' },
            { name: 'Git', logo: 'images/tech/git.png' }
          ]
        }
      ]
    }
  ];

  ngOnInit() {}
}



