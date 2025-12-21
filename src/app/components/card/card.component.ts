import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import type { IconDefinition } from '@ant-design/icons-angular';

import {
  GithubOutline, LinkOutline
}
from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [GithubOutline, LinkOutline];

import { Card } from '../../models/card';

@Component({
  selector: 'nz-card-basic',
  imports: [NzCardModule, CommonModule, NgOptimizedImage, NzIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class NzCardBasicComponent {

  cards: Card[] = [
    {
      id: 1,
      title: 'Dashboard en Excel Osiptel',
      image: 'images/thumbnails/desarrollo&data/ExcelDashBoardOsiptel.png',
      description: 'Elaboré un dashboard interactivo en Excel utilizando el dataset "Tráfico de telefonía de larga distancia por tipo y empresa operadora" proporcionado por OSIPTEL recogido de la Plataforma Nacional de Datos Abiertos del Gobierno del Perú.',
      area: 'Desarrollo de Software & Datos',
      complete: true,
      linkdemo: 'https://utpedupe-my.sharepoint.com/:x:/g/personal/u21306967_utp_edu_pe/IQBWRP_vzr0vQo-C2I6zn8IbAc6RregCRpo6mB0Ure05h8Y?rtime=tsJX-nM_3kg',
      linkgithub: 'https://github.com/rodrigosistemas/dashboard-osiptel-excel'
    },
    {
      id: 2,
      title: 'Testing de API REST Spring Boot',
      image: 'images/thumbnails/programacionweb/APITestingSpringBoot.png',
      description: 'Evalué el rendimiento, la estabilidad y la seguridad de una API REST en Spring Boot. Las pruebas de carga y estrés permitieron medir su desempeño bajo alta concurrencia y validar vulnerabilidades comunes en entornos de producción.',
      area: 'Programación Web',
      complete: true,
      linkdemo: '',
      linkgithub: 'https://github.com/rodrigosistemas/stress-security-test-springboot-api'
    },
    {
      id: 3,
      title: 'Pipeline CI/CD en Jenkins',
      image: 'images/thumbnails/programacionweb/Ecommerce-fullstack.png',
      description: 'Implementé un pipeline CI/CD en Jenkins para un e-commerce con Angular y Spring Boot, automatizando la integración, pruebas y despliegue continuo. El enfoque DevOps permitió optimizar tiempos de entrega y asegurar la calidad del software en cada iteración.',
      area: 'Programación Web',
      complete: false,
      github: true,
      linkgithub: 'https://github.com/rodrigosistemas/ci-cd-jenkins-ecommerce'
    },
    {
      id: 4,
      title: 'Sistema de Gestión A One Taxi',
      image: 'images/thumbnails/programacionweb/SistemaGestionAOne.png',
      description: 'Desarrollé en equipo una plataforma web para Aone Taxi que centraliza operaciones y finanzas, integrando cobros, pagos de conductores, egresos, inventario, control de usuarios y reportes, reemplazando WhatsApp/Yape con una gestión estructurada para escalar el negocio.',
      area: 'Programación Web',
      complete: false,
      demo: true,
      linkdemo: ''
    },
    {
      id: 5,
      title: 'Sitio web Credithome Inmobiliaria',
      image: 'images/thumbnails/programacionweb/SitiowebCredithome.png',
      description: 'Desarrollé el sitio web corporativo para la empresa inmobiliaria Credithome, orientado a mostrar sus servicios y proyectos de manera profesional. Este proyecto facilita la comunicación con clientes y la presencia digital de la empresa.',
      area: 'Programación Web',
      complete: false,
      demo: true,
      linkdemo: 'https://credithome.com.pe/'
    },
    {
      id: 6,
      title: 'Hardening de Linux Server (CIS)',
      image: 'images/thumbnails/ciberseguridad/LinuxCIS.png',
      description: 'Reforcé un servidor Linux aplicando las guías básicas CIS Benchmarks, deshabilitando accesos inseguros, configurando contraseñas robustas, firewall y servicios mínimos, documentando cada ajuste para garantizar seguridad y cumplimiento en entornos productivos.',
      area: 'Ciberseguridad',
      complete: true,
      linkdemo: '',
      linkgithub: 'https://github.com/rodrigosistemas/linux-hardening-cis'
    },
    {
      id: 7,
      title: 'Auditoría de Seguridad en WordPress',
      image: 'images/thumbnails/ciberseguridad/AuditoriaSeguridadWordpress.png',
      description: 'Este proyecto consistió en realizar una auditoría de seguridad sobre un sitio WordPress utilizando herramientas como WPScan. El objetivo fue identificar vulnerabilidades en plugins, temas y demás configuraciones, evaluando la exposición a ataques comunes.',
      area: 'Ciberseguridad',
      complete: true,
      linkdemo: '',
      linkgithub: 'https://github.com/rodrigosistemas/wordpress-pentesting'
    }

  ];


}


