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
      title: 'Sistema de Gestión A One Taxi',
      image: 'images/thumbnails/programacionweb/SistemaGestionAOne.png',
      description: 'Desarrollé en equipo una plataforma web para Aone Taxi que centraliza operaciones y finanzas, integrando cobros, pagos de conductores, egresos, inventario, control de usuarios y reportes, reemplazando WhatsApp/Yape con una gestión estructurada para escalar el negocio.',
      area: 'Programación Web',
      complete: false,
      github: true,
      linkgithub: 'https://github.com/rodrigosistemas/sistema_gestion_aonetaxi'
    },
    {
      id: 3,
      title: 'Sitio web Credithome Inmobiliaria',
      image: 'images/thumbnails/programacionweb/SitiowebCredithome.png',
      description: 'Desarrollé el sitio web corporativo para la empresa inmobiliaria Credithome, orientado a mostrar sus servicios y proyectos de manera profesional. Este proyecto facilita la comunicación con clientes y la presencia digital de la empresa.',
      area: 'Programación Web',
      complete: false,
      demo: true,
      linkdemo: 'https://credithome.com.pe/'
    }

  ];


}


